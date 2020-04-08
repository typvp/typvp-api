import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";
import { TestTrialArgs } from "./args/TestTrialArgs";

@Resolver(_of => Test)
export class TestRelationsResolver {
  @FieldResolver(_type => Account, {
    nullable: true,
    description: undefined,
  })
  async Account(@Root() test: Test, @Ctx() ctx: any): Promise<Account | null> {
    return ctx.prisma.test.findOne({
      where: {
        id: test.id,
      },
    }).Account({});
  }

  @FieldResolver(_type => [Trial], {
    nullable: true,
    description: undefined,
  })
  async Trial(@Root() test: Test, @Ctx() ctx: any, @Args() args: TestTrialArgs): Promise<Trial[] | null> {
    return ctx.prisma.test.findOne({
      where: {
        id: test.id,
      },
    }).Trial(args);
  }
}
