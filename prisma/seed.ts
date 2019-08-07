import * as dotenv from 'dotenv'
import {rword} from 'rword'
dotenv.config()

import {prisma} from '../src/generated/prisma-client'

async function main() {
  await prisma.createAccount({
    email: 'em@k.com',
    username: 'Evan',
    password: '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42"
    role: 'ADMIN',
  })
  await prisma.createAccount({
    email: 'bob@prisma.io',
    username: 'Bob',
    password: '$2b$10$o6KioO.taArzboM44Ig85O3ZFZYZpR3XD7mI8T29eP4znU/.xyJbW', // "secret43"
    role: 'USER',
  })

  const wordSet1 = (rword.generate(250, {length: '3-8'}) as string[]).join('|')
  await prisma.createTrial({
    name: 'typvp Seeded Trail 1',
    wordSet: wordSet1,
  })

  const wordSet2 = (rword.generate(250, {length: '3-8'}) as string[]).join('|')
  await prisma.createTrial({
    name: 'typvp Seeded Trail 2',
    wordSet: wordSet2,
  })

  const wordSet3 = (rword.generate(250, {length: '3-8'}) as string[]).join('|')
  await prisma.createTrial({
    name: 'typvp Seeded Trail 3',
    wordSet: wordSet3,
  })
}

main()
