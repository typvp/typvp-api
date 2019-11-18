import {Prisma} from './generated/prisma-client'
import {Redis} from 'ioredis'

export interface Context {
  prisma: Prisma
  req: any
  redis: Redis
}
