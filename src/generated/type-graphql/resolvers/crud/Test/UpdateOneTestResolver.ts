import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneTestArgs } from "./args/UpdateOneTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class UpdateOneTestResolver {
  @Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async updateOneTest(@Ctx() ctx: any, @Args() args: UpdateOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.update(args);
  }
}
