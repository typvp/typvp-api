import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneTestArgs } from "./args/FindOneTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class FindOneTestResolver {
  @Query(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async test(@Ctx() ctx: any, @Args() args: FindOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.findOne(args);
  }
}
