import {
  Resolver,
  UseMiddleware,
  Args,
  InputType,
  Field,
  Int,
  ArgsType,
  Ctx,
  Mutation,
  Query,
} from 'type-graphql'
import {ResultType} from '../../generated/type-graphql/enums/ResultType'
import {TestCreateInput} from '../../generated/type-graphql/resolvers/inputs/TestCreateInput'
import {Test} from '../../generated/type-graphql/models/Test'
import {FindManyTestArgs} from '../../generated/type-graphql/resolvers/crud/Test/args/FindManyTestArgs'
import {IsAuthenticated} from '../../middleware/Auth'
import {LogAccess} from '../../middleware/Log'
import {Context} from '../../types'
import {getAccountId, stickyKeys} from '../../utils'
import {generate} from '@typvp/gen'
import {Seen} from '../../middleware/Seen'

@InputType({isAbstract: true})
export class ExclusiveCreateOneTestInput implements Partial<TestCreateInput> {
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  correct!: number

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  corrections!: number

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  cpm!: number
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  incorrect!: number

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  rawCpm!: number
  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  wordIndex!: number

  @Field(_type => Int, {
    nullable: false,
    description: undefined,
  })
  wpm!: number
}

@ArgsType()
export class ExclusiveCreateOneTestArgs {
  @Field(_type => ExclusiveCreateOneTestInput, {nullable: false})
  data!: ExclusiveCreateOneTestInput
}

@Resolver(of => Test)
export class TestResolver {
  @Query(returns => [Test])
  async leaderboard(
    @Args() args: FindManyTestArgs,
    @Ctx() ctx: Context,
  ): Promise<Test[]> {
    return ctx.prisma.test.findMany({
      skip: args.skip,
      first: args.first,
      orderBy: {wpm: 'desc'},
    })
  }

  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async createNewResult(
    @Args() args: ExclusiveCreateOneTestArgs,
    @Ctx() ctx: Context,
  ): Promise<boolean> {
    const id = getAccountId(ctx) as string
    const account = await ctx.prisma.account.findOne({where: {id}})
    const wordList = await ctx.redis.get(id)

    const isValid = stickyKeys(args.data, account, {
      wordList,
      mode: 'SINGLEPLAYER',
    })

    if (isValid) {
      await ctx.prisma.test.create({
        data: {...args.data, type: 'SINGLEPLAYER', account: {connect: {id}}},
      })
    }

    await ctx.redis.del(id)

    return isValid
  }

  @Query(returns => String)
  @UseMiddleware(LogAccess, Seen(ResultType.SINGLEPLAYER))
  async getWordset(@Ctx() ctx: Context): Promise<string> {
    const id = getAccountId(ctx)
    const wordList = generate(250, {
      minLength: 3,
      maxLength: 8,
      join: '|',
    }) as string

    if (id) {
      await ctx.redis.set(id, wordList, 'ex', 60 * 60) // 1 hour
    }
    return wordList
  }
}
