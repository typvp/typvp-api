import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneTrialArgs } from "./args/UpsertOneTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class UpsertOneTrialResolver {
  @Mutation(_returns => Trial, {
    nullable: false,
    description: undefined
  })
  async upsertOneTrial(@Ctx() ctx: any, @Args() args: UpsertOneTrialArgs): Promise<Trial> {
    return ctx.prisma.trial.upsert(args);
  }
}
