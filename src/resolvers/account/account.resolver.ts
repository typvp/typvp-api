import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
  Query,
  ID,
} from 'type-graphql'

import {getAccountId} from '../../utils'
import {Context} from '../../types'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {AccountSignupInput, AccountLoginInput} from './account.input'
import {Account, AuthPayload, Role} from './account.type'
import {AccountFragment} from '../fragments/AccountFragment'

@Resolver()
export class AccountResolver {
  @Mutation(returns => AuthPayload)
  @UseMiddleware(LogAccess)
  async signup(
    @Arg('input') input: AccountSignupInput,
    @Ctx() ctx: Context,
  ): Promise<AuthPayload> {
    try {
      const accountExists = await ctx.prisma.$exists.account({
        email: input.email,
      })

      if (accountExists) {
        throw new Error('Account with email already exists')
      }

      const password = await bcrypt.hash(input.password, 10)

      const account = await ctx.prisma.createAccount({
        email: input.email,
        password,
        username: input.username,
        role: 'USER',
      })

      return {
        token: jwt.sign({accountId: account.id}, process.env.APP_SECRET),
        account,
      }
    } catch (err) {
      throw err
    }
  }

  @Mutation(returns => AuthPayload)
  @UseMiddleware(LogAccess)
  async login(
    @Arg('input') input: AccountLoginInput,
    @Ctx() ctx: Context,
  ): Promise<AuthPayload> {
    try {
      const account = await ctx.prisma.account({username: input.username})

      if (!account) {
        throw new Error(
          `Cannot find account associated with the username: ${input.username}`,
        )
      }

      const valid = await bcrypt.compare(input.password, account.password)

      if (!valid) {
        throw new Error('Invalid Username or Password')
      }

      return {
        token: jwt.sign({accountId: account.id}, process.env.APP_SECRET),
        account,
      }
    } catch (err) {
      throw err
    }
  }

  @Query(returns => Account)
  @UseMiddleware(LogAccess)
  async me(@Ctx() ctx: Context): Promise<Account> {
    const userId = getAccountId(ctx)
    return await ctx.prisma.account({id: userId}).$fragment(AccountFragment)
  }

  @Query(returns => Account)
  @UseMiddleware(LogAccess)
  async account(@Arg('id', type => ID) id: string, @Ctx() ctx: Context) {
    return await ctx.prisma.account({id})
  }
}
