import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneTestArgs } from "./args/UpsertOneTestArgs";
import { Test } from "../../../models/Test";

@Resolver(_of => Test)
export class UpsertOneTestResolver {
  @Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async upsertOneTest(@Ctx() ctx: any, @Args() args: UpsertOneTestArgs): Promise<Test> {
    return ctx.prisma.test.upsert(args);
  }
}
