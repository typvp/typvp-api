import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateOneAccountArgs } from "./args/UpdateOneAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class UpdateOneAccountResolver {
  @Mutation(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async updateOneAccount(@Ctx() ctx: any, @Args() args: UpdateOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.update(args);
  }
}
