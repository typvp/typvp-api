import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyTestArgs } from "./args/DeleteManyTestArgs";
import { Test } from "../../../models/Test";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Test)
export class DeleteManyTestResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTest(@Ctx() ctx: any, @Args() args: DeleteManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.deleteMany(args);
  }
}
