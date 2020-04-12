import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";
import { TrialResultsArgs } from "./args/TrialResultsArgs";

@Resolver(_of => Trial)
export class TrialRelationsResolver {
  @FieldResolver(_type => [Test], {
    nullable: true,
    description: undefined,
  })
  async results(@Root() trial: Trial, @Ctx() ctx: any, @Args() args: TrialResultsArgs): Promise<Test[] | null> {
    return ctx.prisma.trial.findOne({
      where: {
        id: trial.id,
      },
    }).results(args);
  }

  @FieldResolver(_type => Account, {
    nullable: true,
    description: undefined,
  })
  async owner(@Root() trial: Trial, @Ctx() ctx: any): Promise<Account | null> {
    return ctx.prisma.trial.findOne({
      where: {
        id: trial.id,
      },
    }).owner({});
  }
}
