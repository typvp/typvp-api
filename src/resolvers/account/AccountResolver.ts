import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import {
  Args,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  Arg,
  ArgsType,
  Field,
  InputType,
} from 'type-graphql'

import {Account} from '../../generated/type-graphql/models/Account'
import {
  FindOneAccountArgs,
  UpdateOneAccountArgs,
  CreateOneAccountArgs,
} from '../../generated/type-graphql/resolvers/crud/Account/args'
import {AccountCreateInput} from '../../generated/type-graphql/resolvers/inputs/AccountCreateInput'
import {AccountUpdateInput} from '../../generated/type-graphql/resolvers/inputs/AccountUpdateInput'
import {Role} from '../../generated/type-graphql/enums/Role'
import {LogAccess} from '../../middleware/Log'
import {Context} from '../../types'
import {getAccountId} from '../../utils'
import {IsAuthenticated} from '../../middleware/Auth'
import {AuthPayload} from './account.type'
import {startEmailConfirmationProcess} from '../../utils/mailing/createConfirmEmailLink'
import {AccountLoginInput} from './account.input'

@InputType({isAbstract: true})
class ExclusiveAccountUpdateInput implements Partial<AccountUpdateInput> {
  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  color?: string | null
  @Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  email?: string | null
}

@ArgsType()
class ExclusiveUpdateOneAccountArgs implements Partial<UpdateOneAccountArgs> {
  @Field(_type => ExclusiveAccountUpdateInput, {nullable: false})
  data!: ExclusiveAccountUpdateInput
}

@InputType({isAbstract: true})
class ExclusiveAccountCreateInput implements Partial<AccountCreateInput> {
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  password!: string
  @Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  username!: string
}

@ArgsType()
class ExclusiveUpdateOneTrialArgs implements CreateOneAccountArgs {
  @Field(_type => ExclusiveAccountCreateInput, {nullable: false})
  data!: ExclusiveAccountCreateInput
}

@Resolver(of => Account)
export class AccountResolver {
  @Query(returns => Account)
  async account(
    @Ctx() ctx: Context,
    @Args() args: FindOneAccountArgs,
  ): Promise<Account | null> {
    return ctx.prisma.account.findOne(args)
  }

  @Query(returns => Account, {nullable: true})
  @UseMiddleware(LogAccess)
  async me(
    @Ctx() ctx: Context,
    @Args() args: FindOneAccountArgs,
  ): Promise<Account | null> {
    const id = getAccountId(ctx)
    if (id) {
      return ctx.prisma.account.findOne(args)
    }
  }

  @Mutation(returns => Account)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async updateAccount(
    @Ctx() ctx: Context,
    @Args() args: ExclusiveUpdateOneAccountArgs,
  ): Promise<Account> {
    const id = getAccountId(ctx) as string
    return ctx.prisma.account.update({where: {id}, data: {...args.data}})
  }

  @Mutation(returns => AuthPayload)
  @UseMiddleware(LogAccess)
  async createAccount(
    @Ctx() ctx: Context,
    @Args() args: ExclusiveUpdateOneTrialArgs,
  ): Promise<AuthPayload> {
    try {
      const accountExists = await ctx.prisma.account.findMany({
        where: {
          OR: [
            {
              usernameLowercase: args.data.username.toLowerCase(),
            },
            {
              email: args.data.email.toLowerCase(),
            },
          ],
        },
      })

      if (accountExists.length !== 0) {
        throw new Error('Email or Username already taken.')
      }

      const password = await bcrypt.hash(args.data.password, 10)

      const email = args.data.email.toLowerCase()
      const usernameLowercase = args.data.username.toLowerCase()

      const account = await ctx.prisma.account.create({
        data: {
          username: args.data.username,
          password,
          role: Role.USER,
          lastSeen: new Date().toISOString(),
          email,
          usernameLowercase,
        },
      })

      if (process.env.NODE_ENV === 'production') {
        startEmailConfirmationProcess(account)
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
    @Arg('test') args: AccountLoginInput,
    @Ctx() ctx: Context,
  ): Promise<AuthPayload> {
    try {
      const account = await ctx.prisma.account.findOne({
        where: {usernameLowercase: args.username.toLowerCase()},
      })

      if (!account) {
        throw new Error(
          `Cannot find account associated with the username: ${args.username}`,
        )
      }

      const valid = await bcrypt.compare(args.password, account.password)

      if (!valid) {
        throw new Error('Invalid Username or Password')
      }

      return {
        token: jwt.sign(
          {accountId: account.id, role: account.role},
          process.env.APP_SECRET,
        ),
        account,
      }
    } catch (err) {
      throw err
    }
  }

  @Mutation(returns => Boolean)
  @UseMiddleware(IsAuthenticated, LogAccess)
  async createPersonalWordset(
    @Arg('wordSet') wordSet: string,
    @Ctx() ctx: Context,
  ): Promise<Boolean> {
    const id = getAccountId(ctx) as string
    const now = new Date().toISOString()

    await ctx.prisma.account.update({
      where: {id},
      data: {
        trials: {
          create: {
            wordSet,
            custom: true,
            private: true,
            name: `Saved ${now}`,
            difficulty: 'NORMAL',
            minWordLength: 3,
            maxWordLength: 8,
          },
        },
      },
    })
    return true
  }
}
