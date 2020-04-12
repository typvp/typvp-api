import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteOneAccountArgs } from "./args/DeleteOneAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class DeleteOneAccountResolver {
  @Mutation(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async deleteOneAccount(@Ctx() ctx: any, @Args() args: DeleteOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.delete(args);
  }
}
