import { config } from 'dotenv'
import { db } from '../src/lib/db'
import { hashPassword } from '../src/lib/crypto'

config({
  path: '../.env',
})

seed()

async function seed() {
  const { pass, salt } = hashPassword(process.env.ADMIN_PASSWORD)

  const adminUser = {
    username: process.env.ADMIN_USER!,
    password: pass,
    salt,
  }

  await db.user.create({
    data: {
      ...adminUser,
    },
  })
}
