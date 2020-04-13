import * as jwt from 'jsonwebtoken'
import {MiddlewareFn} from 'type-graphql'

import {Context} from '../types'
import {prisma} from '../services/prisma'
import {ResultType} from '../generated/type-graphql'

export function Seen(type: ResultType): MiddlewareFn<Context> {
  return ({context}, next) => {
    const authHeader = context.req.headers['authorization']

    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      const {accountId} = jwt.verify(token, process.env.APP_SECRET) as {
        accountId: string
      }
      prisma.account.update({where: {id: accountId}, data: {lastPlayed: type}})
    }
    return next()
  }
}
