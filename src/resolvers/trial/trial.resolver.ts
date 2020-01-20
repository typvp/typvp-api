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
    const id = getAccountId(ctx) as string
    const {
      trialId,
      correct,
      corrections,
      cpm,
      incorrect,
      rawCpm,
      wpm,
      wordIndex,
    } = input
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
              wordIndex,
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
  async trials(@Ctx() ctx: Context): Promise<Trial[]> {
    return await ctx.prisma.trials({
      where: {
        custom: false,
        private: false,
      },
    })
  }

  @Query(returns => Trial)
  @UseMiddleware(LogAccess)
  async trial(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ): Promise<Trial> {
    return await ctx.prisma.trial({id: trialId})
  }

  @Query(returns => Trial)
  @UseMiddleware(LogAccess)
  async trialLeaders(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ): Promise<Trial> {
    return await ctx.prisma.trial({id: trialId}).results({
      orderBy: 'wpm_DESC',
      first: 10,
    })
  }

  @Mutation(returns => Trial)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async updateTrialInfo(
    @Arg('trialId', type => ID) trialId: string,
    @Arg('name', type => String, {nullable: true}) name: string,
    @Arg('wordSet', type => String, {nullable: true}) wordSet: string,
    @Arg('private', type => Boolean, {nullable: true}) isPrivate: boolean,
    @Ctx() ctx: Context,
  ): Promise<Trial> {
    const id = getAccountId(ctx) as string
    try {
      const trial = await ctx.prisma
        .account({
          id: id,
        })
        .personalTrials({
          where: {
            id: trialId,
          },
        })

      if (trial) {
        return await ctx.prisma.updateTrial({
          data: {
            name: name && name,
            wordSet: wordSet && wordSet,
            private: isPrivate && isPrivate,
          },
          where: {
            id: trialId,
          },
        })
      } else {
        throw new Error('Trial not found or does not belong to Requester')
      }
    } catch (e) {
      throw new Error('Trial not found or does not belong to Requester')
    }
  }

  @Mutation(returns => Trial)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async deleteTrial(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ): Promise<Trial> {
    const id = getAccountId(ctx) as string
    try {
      const trial = await ctx.prisma
        .account({
          id: id,
        })
        .personalTrials({
          where: {
            id: trialId,
          },
        })

      if (trial) {
        return await ctx.prisma.deleteTrial({id: trialId})
        // return true
      } else {
        throw new Error('Trial not found or does not belong to Requester')
      }
    } catch (e) {
      throw new Error('Trial not found or does not belong to Requester')
    }
  }
}
