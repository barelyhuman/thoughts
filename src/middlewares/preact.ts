import { readFileSync } from 'fs'
import { join } from 'path'
import { h } from 'preact'
import { renderToString } from 'preact-render-to-string'

declare module 'express' {
  interface Response {
    renderToString(Component: any, props: Record<string, any>): void
  }
}

export function preactMiddleware(_, res, next) {
  res.renderToString = (comp, props) => {
    res.status(200)
    res.setHeader('content-type', 'text/html')
    const html = `
    
      <html>
        <head>
          <title>Thoughts</title>
          <style>
            ${readFileSync(
              join(process.cwd(), './src/public/styles.min.css'),
              'utf-8'
            )}
          </style>
        </head>
        <body>
${renderToString(h(comp, props))}
        </body>

      </html>

    `
    res.write(html)
    res.end()
    return
  }
  next()
}
