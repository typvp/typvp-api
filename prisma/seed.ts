import * as dotenv from 'dotenv'
dotenv.config()
import {prisma} from '../src/generated/prisma-client'

async function main() {
  await prisma.createAccount({
    email: 'evam@kysley.com',
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
  await prisma.createRoom({
    roomState: 'IDLE',
    race: {
      create: {
        wordSet: 'Sample',
        raceState: 'AWAITING',
      },
    },
  })
}

main()
