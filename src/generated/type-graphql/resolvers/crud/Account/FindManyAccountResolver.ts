import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { Account } from "../../../models/Account";

@Resolver(_of => Account)
export class FindManyAccountResolver {
  @Query(_returns => [Account], {
    nullable: false,
    description: undefined
  })
  async accounts(@Ctx() ctx: any, @Args() args: FindManyAccountArgs): Promise<Account[]> {
    return ctx.prisma.account.findMany(args);
  }
}
