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
  FieldResolver,
  Root,
  Int,
} from 'type-graphql'

import {getAccountId} from '../../utils'
import {Context} from '../../types'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {AccountSignupInput, AccountLoginInput} from './account.input'
import {FilterArgs} from '../generic.args'
import {Account, AuthPayload} from './account.type'
import {AccountFragment} from '../fragments/AccountFragment'
import {TestsWithCount} from '../typingTest/test.type'
import {startEmailConfirmationProcess} from '../../utils/createConfirmEmailLink'

@Resolver(of => Account)
export class AccountResolver {
  @Mutation(returns => AuthPayload)
  @UseMiddleware(LogAccess)
  async signup(
    @Arg('input') input: AccountSignupInput,
    @Ctx() ctx: Context,
  ): Promise<AuthPayload> {
    try {
      const accountExists = await ctx.prisma.$exists.account({
        OR: [
          {
            email: input.email.toLowerCase(),
          },
          {
            usernameLowercase: input.username.toLowerCase(),
          },
        ],
      })

      if (accountExists) {
        throw new Error('Email or Username already taken')
      }

      const password = await bcrypt.hash(input.password, 10)

      const account = await ctx.prisma.createAccount({
        email: input.email.toLowerCase(),
        password,
        username: input.username,
        usernameLowercase: input.username.toLowerCase(),
        role: 'USER',
      })

      if (process.env.NODE_ENV === 'production') {
        startEmailConfirmationProcess(account, ctx.req)
      }

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
      const account = await ctx.prisma.account({
        usernameLowercase: input.username.toLowerCase(),
      })

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

  @Query(returns => Account, {nullable: true})
  @UseMiddleware(LogAccess)
  async me(@Ctx() ctx: Context): Promise<Account | null> {
    const id = getAccountId(ctx)
    if (id) {
      return await ctx.prisma.account({id}).$fragment(AccountFragment)
    }
    return null
  }

  @Query(returns => Account)
  @UseMiddleware(LogAccess)
  async account(@Arg('id', type => ID) id: string, @Ctx() ctx: Context) {
    return await ctx.prisma.account({id})
  }

  @Query(returns => TestsWithCount)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async myResults(
    @Arg('filter') filter: FilterArgs,
    @Ctx() ctx: Context,
  ): Promise<TestsWithCount> {
    const id = getAccountId(ctx) as string
    const results = await ctx.prisma.account({id}).results({
      skip: filter.skip,
      first: filter.first,
      orderBy: filter.date,
      where: {
        type_in: filter.type ? [filter.type] : ['SINGLEPLAYER', 'TRIAL'],
      },
    })
    return {
      results,
      testCount: await this.testCount({id} as Account, ctx),
    }
  }

  @Mutation(returns => Boolean, {nullable: true})
  @UseMiddleware(IsAuthenticated, LogAccess)
  async seen(@Ctx() ctx: Context): Promise<void> {
    const id = getAccountId(ctx) as string
    await ctx.prisma.updateAccount({
      where: {
        id,
      },
      data: {
        lastSeen: Date.now(),
      },
    })
  }

  @Mutation(returns => Account)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async updateAccountColor(
    @Arg('color', type => String) color: string,
    @Ctx() ctx: Context,
  ): Promise<Account> {
    const id = getAccountId(ctx) as string
    return await ctx.prisma.updateAccount({
      where: {id},
      data: {
        color,
      },
    })
  }

  @FieldResolver(returns => Int)
  async testCount(@Root() account: Account, @Ctx() ctx: Context) {
    const {count} = await ctx.prisma
      .testsConnection({
        where: {
          account: {
            id: account.id,
          },
        },
      })
      .aggregate()
    return count
  }
}
