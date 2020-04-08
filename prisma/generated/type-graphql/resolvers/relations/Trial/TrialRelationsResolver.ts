import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";
import { TrialTestArgs } from "./args/TrialTestArgs";

@Resolver(_of => Trial)
export class TrialRelationsResolver {
  @FieldResolver(_type => Account, {
    nullable: true,
    description: undefined,
  })
  async Account(@Root() trial: Trial, @Ctx() ctx: any): Promise<Account | null> {
    return ctx.prisma.trial.findOne({
      where: {
        id: trial.id,
      },
    }).Account({});
  }

  @FieldResolver(_type => [Test], {
    nullable: true,
    description: undefined,
  })
  async Test(@Root() trial: Trial, @Ctx() ctx: any, @Args() args: TrialTestArgs): Promise<Test[] | null> {
    return ctx.prisma.trial.findOne({
      where: {
        id: trial.id,
      },
    }).Test(args);
  }
}
