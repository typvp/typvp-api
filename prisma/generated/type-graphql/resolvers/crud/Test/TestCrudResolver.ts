import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneTestArgs } from "./args/CreateOneTestArgs";
import { DeleteManyTestArgs } from "./args/DeleteManyTestArgs";
import { DeleteOneTestArgs } from "./args/DeleteOneTestArgs";
import { FindManyTestArgs } from "./args/FindManyTestArgs";
import { FindOneTestArgs } from "./args/FindOneTestArgs";
import { UpdateManyTestArgs } from "./args/UpdateManyTestArgs";
import { UpdateOneTestArgs } from "./args/UpdateOneTestArgs";
import { UpsertOneTestArgs } from "./args/UpsertOneTestArgs";
import { Test } from "../../../models/Test";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Test)
export class TestCrudResolver {
  @Query(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async test(@Ctx() ctx: any, @Args() args: FindOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.findOne(args);
  }

  @Query(_returns => [Test], {
    nullable: false,
    description: undefined
  })
  async tests(@Ctx() ctx: any, @Args() args: FindManyTestArgs): Promise<Test[]> {
    return ctx.prisma.test.findMany(args);
  }

  @Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async createOneTest(@Ctx() ctx: any, @Args() args: CreateOneTestArgs): Promise<Test> {
    return ctx.prisma.test.create(args);
  }

  @Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async deleteOneTest(@Ctx() ctx: any, @Args() args: DeleteOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.delete(args);
  }

  @Mutation(_returns => Test, {
    nullable: true,
    description: undefined
  })
  async updateOneTest(@Ctx() ctx: any, @Args() args: UpdateOneTestArgs): Promise<Test | null> {
    return ctx.prisma.test.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyTest(@Ctx() ctx: any, @Args() args: DeleteManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyTest(@Ctx() ctx: any, @Args() args: UpdateManyTestArgs): Promise<BatchPayload> {
    return ctx.prisma.test.updateMany(args);
  }

  @Mutation(_returns => Test, {
    nullable: false,
    description: undefined
  })
  async upsertOneTest(@Ctx() ctx: any, @Args() args: UpsertOneTestArgs): Promise<Test> {
    return ctx.prisma.test.upsert(args);
  }
}
