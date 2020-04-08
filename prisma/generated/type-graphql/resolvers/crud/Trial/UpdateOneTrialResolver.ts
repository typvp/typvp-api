import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneTrialArgs } from "./args/UpdateOneTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class UpdateOneTrialResolver {
  @Mutation(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async updateOneTrial(@Ctx() ctx: any, @Args() args: UpdateOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.update(args);
  }
}
