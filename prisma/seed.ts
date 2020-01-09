import * as dotenv from 'dotenv'
import {generate} from '@typvp/gen'
dotenv.config()

import {prisma} from '../src/generated/prisma-client'

async function main() {
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

  const normalSet1 = generate(250, {
    minLength: 3,
    maxLength: 8,
    join: '|',
  }) as string
  await prisma.createTrial({
    name: 'typvp Standard Trial 1',
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
    name: 'typvp Standard Trial 2',
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
    name: 'typvp Standard Trial 3',
    wordSet: normalSet3,
    minWordLength: 3,
    maxWordLength: 8,
    difficulty: 'NORMAL',
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
