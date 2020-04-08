import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";
import { AccountTestArgs } from "./args/AccountTestArgs";
import { AccountTrialArgs } from "./args/AccountTrialArgs";

@Resolver(_of => Account)
export class AccountRelationsResolver {
  @FieldResolver(_type => [Test], {
    nullable: true,
    description: undefined,
  })
  async Test(@Root() account: Account, @Ctx() ctx: any, @Args() args: AccountTestArgs): Promise<Test[] | null> {
    return ctx.prisma.account.findOne({
      where: {
        id: account.id,
      },
    }).Test(args);
  }

  @FieldResolver(_type => [Trial], {
    nullable: true,
    description: undefined,
  })
  async Trial(@Root() account: Account, @Ctx() ctx: any, @Args() args: AccountTrialArgs): Promise<Trial[] | null> {
    return ctx.prisma.account.findOne({
      where: {
        id: account.id,
      },
    }).Trial(args);
  }
}
