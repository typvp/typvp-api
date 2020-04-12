import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyTrialArgs } from "./args/UpdateManyTrialArgs";
import { Trial } from "../../../models/Trial";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Trial)
export class UpdateManyTrialResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTrial(@Ctx() ctx: any, @Args() args: UpdateManyTrialArgs): Promise<BatchPayload> {
    return ctx.prisma.trial.updateMany(args);
  }
}
