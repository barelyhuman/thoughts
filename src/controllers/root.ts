import AdminLoginForm from '@/components/AdminLoginForm'
import Dashboard from '@/components/Dashboard'
import NewPostPage from '@/components/NewPostPage'
import ThoughtsList from '@/components/ThoughtsList'
import ViewPostAdmin from '@/components/ViewPostAdmin'
import { config } from '@/configs'
import { verifyPassword } from '@/lib/crypto'
import { get, post } from '@/lib/router'
import { auth, optionalLoggedIn } from '@/middlewares/auth'
import { randomBytes } from 'crypto'
import { Request, Response } from 'express'
import { readFile, readdir, writeFile } from 'fs/promises'
import { marked } from 'marked'
import { extname, join } from 'path'
import * as Yup from 'yup'

const LoginUserSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

export class RootController {
  @get('/', [optionalLoggedIn])
  async index(req: Request, res: Response) {
    const basePath = join(__dirname, '../content')
    const thoughts = await readdir(basePath)
    const formattedThoughts = []

    for (let file of thoughts) {
      const fileData = await readFile(join(basePath, file), 'utf8')

      const dateInMills = file.replace(extname(file), '')

      formattedThoughts.push({
        date: new Date(+dateInMills),
        content: marked(fileData),
      })
    }

    return res.renderToString(ThoughtsList, {
      data: formattedThoughts.sort(
        (x, y) => y.date.getTime() - x.date.getTime()
      ),
      authenticated: req.currentUser,
    })
  }

  @get('/admin/login')
  adminGet(req: Request, res: Response) {
    return res.renderToString(AdminLoginForm, {})
  }

  @post('/admin/login')
  async adminLogin(req: Request, res: Response) {
    try {
      const payload = await LoginUserSchema.validate(req.body)

      const userDetails = await req.db.user.findFirst({
        where: {
          username: payload.username,
        },
      })

      if (!userDetails) {
        req.flash('error', 'Invalid credentials, please try again')
        return res.redirect(302, '/login')
      }

      const isPasswordValid = verifyPassword(
        payload.password,
        userDetails.password,
        userDetails.salt
      )

      if (!isPasswordValid) {
        req.flash('error', 'Invalid credentials, please try again')
        return res.redirect(302, '/admin/login')
      }

      const authToken = randomBytes(32).toString('base64url')

      await req.db.tokens.create({
        data: {
          // TODO: get from request source
          name: 'Browser Token',
          userId: userDetails.id,
          authToken: authToken,
        },
      })

      // @ts-ignore
      req.session.token = authToken

      return res.redirect(302, '/admin')
    } catch (err) {
      console.error(err)

      if (err instanceof Yup.ValidationError) {
        res.badParameters(err)
        return
      }

      return res.serverError(err)
    }
  }

  @get('/admin', [auth])
  async dashboardView(req: Request, res: Response) {
    const basePath = join(__dirname, '../content')
    const thoughts = await readdir(basePath)
    const formattedThoughts = []

    for (let file of thoughts) {
      const fileData = await readFile(join(basePath, file), 'utf8')
      const dateInMills = file.replace(extname(file), '')
      formattedThoughts.push({
        filename: file,
        date: new Date(+dateInMills),
        content: marked(fileData),
      })
    }

    return res.renderToString(Dashboard, {
      existingThoughts: formattedThoughts.sort((x, y) => {
        return y.date.getTime() - x.date.getTime()
      }),
    })
  }

  @get('/admin/posts/new', [auth])
  async createPostGet(req: Request, res: Response) {
    return res.renderToString(NewPostPage, {})
  }

  @post('/admin/posts/new', [auth])
  async createPost(req: Request, res: Response) {
    const basePath = join(__dirname, '../content')
    const createdOnString = new Date().getTime()
    const filePathFull = createdOnString + '.md'
    const filePath = join(basePath, filePathFull)
    await writeFile(filePath, req.body.content, 'utf8')

    req.pushToQueue(config.queue.searchIndex.name, {
      type: config.queue.searchIndex.types.generateIndex,
    })

    return res.redirect(302, '/admin')
  }

  @get('/admin/posts/:postFile', [auth])
  async viewPostAdmin(req: Request, res: Response) {
    const basePath = join(__dirname, '../content')
    const file = join(basePath, req.params.postFile)
    const content = await readFile(file, 'utf8')

    return res.renderToString(ViewPostAdmin, {
      postFile: req.params.postFile,
      postData: marked(content),
      postDataRaw: content,
    })
  }

  @post('/admin/posts/:postFile', [auth])
  async updatePostAdmin(req: Request, res: Response) {
    const basePath = join(__dirname, '../content')
    const file = join(basePath, req.params.postFile)
    const content = req.body.content
    await writeFile(file, content, 'utf8')
    return res.redirect(302, `/admin/posts/${req.params.postFile}`)
  }
}
