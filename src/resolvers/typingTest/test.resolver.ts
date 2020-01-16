import {Resolver, Mutation, Arg, Ctx, UseMiddleware, Query} from 'type-graphql'
import {generate} from '@typvp/gen'

import {getAccountId, stickyKeys} from '../../utils'
import {Context} from '../../types'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {NewTestInput} from './test.input'
import {Test} from './test.type'
import {PaginationArgs} from '../generic.args'

@Resolver()
export class TestResolver {
  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async addNewResult(@Arg('result') input: NewTestInput, @Ctx() ctx: Context) {
    const id = getAccountId(ctx) as string
    const account = await ctx.prisma.account({id})
    const wordList = await ctx.redis.get(id)

    const isValid = stickyKeys(input, account, {
      wordList,
      mode: 'SINGLEPLAYER',
    })

    if (isValid) {
      await ctx.prisma
        .createTest({
          account: {
            connect: {
              id: id,
            },
          },
          ...input,
          type: 'SINGLEPLAYER',
        })
        .catch(async () => {
          await ctx.redis.del(id)
          return false
        })
      await ctx.redis.del(id)
      return true
    }
    return false
  }

  @Mutation(returns => String)
  @UseMiddleware(LogAccess)
  async getWordSet(@Ctx() ctx: Context): Promise<string> {
    const id = getAccountId(ctx)
    const wordList = generate(250, {
      minLength: 3,
      maxLength: 8,
      join: '|',
    }) as string
    if (id) {
      await ctx.prisma.updateAccount({
        where: {
          id,
        },
        data: {
          lastSeen: Date.now(),
          lastPlayed: 'SINGLEPLAYER',
        },
      })
      ctx.redis.set(id, wordList, 'ex', 60 * 60) // key expires in 1 hour
    }
    return wordList
  }

  @Query(returns => [Test])
  @UseMiddleware(LogAccess)
  async leaderboard(
    @Arg('filter') filter: PaginationArgs,
    @Ctx() ctx: Context,
  ) {
    return ctx.prisma.tests({
      skip: filter.skip,
      first: filter.first,
      orderBy: 'wpm_DESC',
    })
  }

  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async saveWordSet(
    @Arg('wordSet') wordSet: string,
    @Ctx() ctx: Context,
  ): Promise<boolean> {
    const id = getAccountId(ctx) as string
    const now = new Date().toDateString()

    await ctx.prisma.updateAccount({
      where: {
        id,
      },
      data: {
        personalTrials: {
          create: {
            wordSet,
            custom: true,
            private: true,
            name: `Saved ${now}`,
          },
        },
      },
    })

    return true
  }
}
