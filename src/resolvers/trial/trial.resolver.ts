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
import {NewTrialResultInput} from './trial.input'
import {Trial} from './trial.type'

@Resolver()
export class TrialResolver {
  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async addNewTrialResult(
    @Arg('result') input: NewTrialResultInput,
    @Ctx() ctx: Context,
  ): Promise<Boolean> {
    const id = getAccountId(ctx)
    const {trialId, correct, corrections, cpm, incorrect, rawCpm, wpm} = input
    await ctx.prisma
      .updateTrial({
        where: {
          id: trialId,
        },
        data: {
          results: {
            create: {
              account: {
                connect: {
                  id,
                },
              },
              correct,
              corrections,
              cpm,
              incorrect,
              rawCpm,
              type: 'TRIAL',
              wpm,
            },
          },
        },
      })
      .catch(() => {
        return false
      })
    return true
  }

  @Query(returns => [Trial])
  @UseMiddleware(LogAccess)
  async trials(@Ctx() ctx: Context) {
    return await ctx.prisma.trials()
  }

  @Query(returns => Trial)
  @UseMiddleware(LogAccess)
  async trial(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ) {
    return await ctx.prisma.trial({id: trialId})
  }

  @Query(returns => Trial)
  @UseMiddleware(LogAccess)
  async trialLeaders(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ) {
    return await ctx.prisma.trial({id: trialId}).results({
      orderBy: 'wpm_DESC',
      first: 10,
    })
  }
}
