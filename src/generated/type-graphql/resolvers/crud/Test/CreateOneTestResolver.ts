import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTestArgs } from "./args/CreateOneTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class CreateOneTestResolver {
  @Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async createOneTest(@Ctx() ctx: any, @Args() args: CreateOneTestArgs): Promise<Test> {
    return ctx.prisma.test.create(args);
  }
}
