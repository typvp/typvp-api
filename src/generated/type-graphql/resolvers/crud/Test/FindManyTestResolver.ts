import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyTestArgs } from "./args/FindManyTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class FindManyTestResolver {
  @Query(_returns => [Test], {
    nullable: false,
    description: undefined
  })
  async tests(@Ctx() ctx: any, @Args() args: FindManyTestArgs): Promise<Test[]> {
    return ctx.prisma.test.findMany(args);
  }
}
