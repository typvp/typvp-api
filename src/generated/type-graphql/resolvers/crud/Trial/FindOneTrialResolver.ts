import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneTrialArgs } from "./args/FindOneTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class FindOneTrialResolver {
  @Query(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async trial(@Ctx() ctx: any, @Args() args: FindOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.findOne(args);
  }
}
