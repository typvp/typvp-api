import {MiddlewareFn} from 'type-graphql'
import {Context} from '../types'

export const LogAccess: MiddlewareFn<Context> = ({context, info}, next) => {
  // TODO: implement proper logging
  const username: string = context.req.headers.authorization || 'guest'
  console.log(
    `Logging access: ${username} -> ${info.parentType.name}.${info.fieldName}`,
  )
  return next()
}
