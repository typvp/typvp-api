import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";
import { AccountTestsArgs } from "./args/AccountTestsArgs";
import { AccountTrialsArgs } from "./args/AccountTrialsArgs";

@Resolver(_of => Account)
export class AccountRelationsResolver {
  @FieldResolver(_type => [Test], {
    nullable: true,
    description: undefined,
  })
  async tests(@Root() account: Account, @Ctx() ctx: any, @Args() args: AccountTestsArgs): Promise<Test[] | null> {
    return ctx.prisma.account.findOne({
      where: {
        id: account.id,
      },
    }).tests(args);
  }

  @FieldResolver(_type => [Trial], {
    nullable: true,
    description: undefined,
  })
  async trials(@Root() account: Account, @Ctx() ctx: any, @Args() args: AccountTrialsArgs): Promise<Trial[] | null> {
    return ctx.prisma.account.findOne({
      where: {
        id: account.id,
      },
    }).trials(args);
  }
}
