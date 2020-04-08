import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { CreateOneAccountArgs } from "./args/CreateOneAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class CreateOneAccountResolver {
  @Mutation(_returns => Account, {
    nullable: false,
    description: undefined
  })
  async createOneAccount(@Ctx() ctx: any, @Args() args: CreateOneAccountArgs): Promise<Account> {
    return ctx.prisma.account.create(args);
  }
}
