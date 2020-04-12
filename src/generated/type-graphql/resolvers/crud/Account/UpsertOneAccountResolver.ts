import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpsertOneAccountArgs } from "./args/UpsertOneAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class UpsertOneAccountResolver {
  @Mutation(_returns => Account, {
    nullable: false,
    description: undefined
  })
  async upsertOneAccount(@Ctx() ctx: any, @Args() args: UpsertOneAccountArgs): Promise<Account> {
    return ctx.prisma.account.upsert(args);
  }
}
