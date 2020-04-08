import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyTestArgs } from "./args/UpdateManyTestArgs";
import { Test } from "../../../models/Test";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Test)
export class UpdateManyTestResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTest(@Ctx() ctx: any, @Args() args: UpdateManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.updateMany(args);
  }
}
