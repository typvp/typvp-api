import {
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
  Query,
  ID,
  Args,
  ArgsType,
  InputType,
  Field,
} from 'type-graphql'

import {getAccountId} from '../../utils'
import {Context} from '../../types'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {Trial} from '../../generated/type-graphql/models/Trial'
import {Test} from '../../generated/type-graphql/models/Test'
import {UpdateOneTrialArgs} from '../../generated/type-graphql/resolvers/crud/Trial/args/UpdateOneTrialArgs'
import {TrialUpdateInput} from '../../generated/type-graphql/resolvers/inputs/TrialUpdateInput'
import {TrialWhereUniqueInput} from '../../generated/type-graphql/resolvers/inputs/TrialWhereUniqueInput'

@InputType({isAbstract: true})
class ExclusiveUpdateOneTrialInput implements Partial<TrialUpdateInput> {
  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  wordSet?: string | null

  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined,
  })
  private?: boolean | null
}

@ArgsType()
class ExclusiveUpdateOneTrialArgs implements UpdateOneTrialArgs {
  @Field(_type => TrialUpdateInput, {nullable: false})
  data!: ExclusiveUpdateOneTrialInput

  @Field(_type => TrialWhereUniqueInput, {nullable: false})
  where!: TrialWhereUniqueInput
}

@Resolver(of => Trial)
export class TrialResolver {
  @Query(returns => [Test])
  async trialLeaders(
    @Arg('trialId', type => ID) trialId: string,
    @Ctx() ctx: Context,
  ): Promise<Test[]> {
    // @todo add pagination?
    return ctx.prisma.trial
      .findOne({where: {id: trialId}})
      .results({orderBy: {wpm: 'desc'}})
  }

  @Mutation(returns => Trial)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async updateTrial(
    @Ctx() ctx: Context,
    @Args() args: ExclusiveUpdateOneTrialArgs,
  ): Promise<Trial> {
    try {
      const id = getAccountId(ctx) as string
      const exists = await ctx.prisma.trial.findMany({
        where: {AND: [{id: args.where.id}, {ownerId: id}]},
      })

      if (exists.length !== 1) {
        throw new Error('Trial not found or does not belong to Requester')
      } else if (exists.length === 1) {
        return ctx.prisma.trial.update({
          where: {id: args.where.id},
          data: {
            ...args.data,
          },
        })
      }
    } catch (e) {
      throw e
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
      const exists = await ctx.prisma.trial.findMany({
        where: {AND: [{id: trialId}, {ownerId: id}]},
      })
      // There should never be more than 1 result here
      if (exists.length !== 1) {
        throw new Error('Trial not found or does not belong to Requester')
      } else if (exists.length === 1) {
        return ctx.prisma.trial.delete({where: {id: trialId}})
      }
    } catch (e) {
      throw e
    }
  }
}
