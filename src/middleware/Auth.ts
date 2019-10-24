import * as jwt from 'jsonwebtoken'
import {Context} from '../types'
import {AuthChecker, MiddlewareFn} from 'type-graphql'
import {AuthenticationError} from 'apollo-server-core'

/**
 * Authorization middleware that verifies a user is of the right role
 * to access the resource. This is the handler function for @Authorized decorator
 *
 * @param obj - resolver data
 * @param roles - array of roles to be checked against
 */
export const AuthorizationCheck: AuthChecker<Context> = (
  {root, args, context, info},
  roles,
) => {
  const authHeader = context.req.headers['authorization']

  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    const {userId} = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }

    // NOTE: As of now RBAC isn't implemented within the DB and may
    // not be needed. Uncomment this code if you have configured
    // RBAC for your users
    if (roles) {
      // const user = await ctx.prisma.user({ id: accountId })
      // roles.map((role: string) => {
      //   if (role == user.userRole) return true
      // })
      // return false
    }

    // Since we have no roles argument passed to the middleware
    // we only need to worry about basic authorization, with
    // the token having been verified, we can authorize the user.
    return true
  }

  // No authorization header or value present so user cannot be authorized
  return false
}

/**
 * Authentication middleware that checks whether the Authorization token
 * is a valid signed JWT token. Rejects and throws error to the user
 * if invalid. This function is to be called using @UseMiddleware decorator
 *
 * @param { context } - resolver context (access to request/response)
 * @param next - next middleware callback
 */
export const IsAuthenticated: MiddlewareFn<Context> = async (
  {context},
  next,
) => {
  const authHeader = context.req.headers['authorization']

  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    jwt.verify(token, process.env.APP_SECRET)

    // JWT verified, user is authenticated
    return next()
  }

  // No authorization header or value present so user cannot be authorized
  throw new AuthenticationError(
    '[ERR] No JWT token or "Authorization" header present.',
  )
}
