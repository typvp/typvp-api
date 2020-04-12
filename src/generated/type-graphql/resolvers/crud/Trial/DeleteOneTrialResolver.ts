import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneTrialArgs } from "./args/DeleteOneTrialArgs";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Trial)
export class DeleteOneTrialResolver {
  @Mutation(_returns => Trial, {
    nullable: true,
    description: undefined
  })
  async deleteOneTrial(@Ctx() ctx: any, @Args() args: DeleteOneTrialArgs): Promise<Trial | null> {
    return ctx.prisma.trial.delete(args);
  }
}
