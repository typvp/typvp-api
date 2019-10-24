import {Resolver, Mutation, Arg, Ctx, UseMiddleware} from 'type-graphql'

import {getAccountId} from '../../utils'
import {Context} from '../../types'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {NewTestInput} from './test.input'

@Resolver()
export class TestResolver {
  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async addNewResult(@Arg('result') input: NewTestInput, @Ctx() ctx: Context) {
    const id = getAccountId(ctx)
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
      .catch(() => {
        return false
      })
    return true
  }
}
