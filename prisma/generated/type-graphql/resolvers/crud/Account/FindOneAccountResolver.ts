import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindOneAccountArgs } from "./args/FindOneAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class FindOneAccountResolver {
  @Query(_returns => Account, {
    nullable: true,
    description: undefined
  })
  async account(@Ctx() ctx: any, @Args() args: FindOneAccountArgs): Promise<Account | null> {
    return ctx.prisma.account.findOne(args);
  }
}
