import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneTestArgs } from "./args/DeleteOneTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class DeleteOneTestResolver {
  @Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async deleteOneTest(@Ctx() ctx: any, @Args() args: DeleteOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.delete(args);
  }
}
