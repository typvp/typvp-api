import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyTrialArgs } from "./args/DeleteManyTrialArgs";
import { Trial } from "../../../models/Trial";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Trial)
export class DeleteManyTrialResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTrial(@Ctx() ctx: any, @Args() args: DeleteManyTrialArgs): Promise<BatchPayload> {
    return ctx.prisma.trial.deleteMany(args);
  }
}
