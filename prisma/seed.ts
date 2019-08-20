import * as dotenv from 'dotenv'
import {generate} from '@typvp/gen'
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

  const normalSet1 = generate(250, {
    minLength: 3,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Standard Trail 1',
    wordSet: normalSet1,
    minWordLength: 3,
    maxWordLength: 8,
    difficulty: 'NORMAL',
  })

  const normalSet2 = generate(250, {
    minLength: 3,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Standard Trail 2',
    wordSet: normalSet2,
    minWordLength: 3,
    maxWordLength: 8,
    difficulty: 'NORMAL',
  })

  const normalSet3 = generate(250, {
    minLength: 3,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Standard Trail 3',
    wordSet: normalSet3,
    minWordLength: 3,
    maxWordLength: 8,
    difficulty: 'NORMAL',
  })

  const easySet1 = generate(250, {
    minLength: 3,
    maxLength: 5,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Easy Trial 1',
    wordSet: easySet1,
    minWordLength: 3,
    maxWordLength: 5,
    difficulty: 'EASY',
  })

  const mediumSet1 = generate(250, {
    minLength: 4,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Medium Trial 1',
    wordSet: mediumSet1,
    minWordLength: 4,
    maxWordLength: 8,
    difficulty: 'MEDIUM',
  })

  const hardSet1 = generate(250, {
    minLength: 5,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Hard Trial 1',
    wordSet: hardSet1,
    minWordLength: 5,
    maxWordLength: 8,
    difficulty: 'HARD',
  })
}

main()
