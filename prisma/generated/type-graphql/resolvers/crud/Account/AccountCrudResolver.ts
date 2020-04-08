import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneAccountArgs } from "./args/CreateOneAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { DeleteOneAccountArgs } from "./args/DeleteOneAccountArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindOneAccountArgs } from "./args/FindOneAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpdateOneAccountArgs } from "./args/UpdateOneAccountArgs";
import { UpsertOneAccountArgs } from "./args/UpsertOneAccountArgs";
import { Account } from "../../../models/Account";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Account)
export class AccountCrudResolver {
  @Query(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async account(@Ctx() ctx: any, @Args() args: FindOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.findOne(args);
  }

  @Query(_returns => [Account], {
    nullable: false,
    description: undefined
  })
  async accounts(@Ctx() ctx: any, @Args() args: FindManyAccountArgs): Promise<Account[]> {
    return ctx.prisma.account.findMany(args);
  }

  @Mutation(_returns => Account, {
    nullable: false,
    description: undefined
  })
  async createOneAccount(@Ctx() ctx: any, @Args() args: CreateOneAccountArgs): Promise<Account> {
    return ctx.prisma.account.create(args);
  }

  @Mutation(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async deleteOneAccount(@Ctx() ctx: any, @Args() args: DeleteOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.delete(args);
  }

  @Mutation(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async updateOneAccount(@Ctx() ctx: any, @Args() args: UpdateOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.update(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAccount(@Ctx() ctx: any, @Args() args: DeleteManyAccountArgs): Promise<BatchPayload> {
    return ctx.prisma.account.deleteMany(args);
  }

  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAccount(@Ctx() ctx: any, @Args() args: UpdateManyAccountArgs): Promise<BatchPayload> {
    return ctx.prisma.account.updateMany(args);
  }

  @Mutation(_returns => Account, {
    nullable: false,
    description: undefined
  })
  async upsertOneAccount(@Ctx() ctx: any, @Args() args: UpsertOneAccountArgs): Promise<Account> {
    return ctx.prisma.account.upsert(args);
  }
}
