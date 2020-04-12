import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyTrialArgs } from "./args/FindManyTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class FindManyTrialResolver {
  @Query(_returns => [Trial], {
    nullable: false,
    description: undefined
  })
  async trials(@Ctx() ctx: any, @Args() args: FindManyTrialArgs): Promise<Trial[]> {
    return ctx.prisma.trial.findMany(args);
  }
}
