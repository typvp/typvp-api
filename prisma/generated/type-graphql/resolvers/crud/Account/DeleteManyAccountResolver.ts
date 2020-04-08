import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { Account } from "../../../models/Account";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Account)
export class DeleteManyAccountResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyAccount(@Ctx() ctx: any, @Args() args: DeleteManyAccountArgs): Promise<BatchPayload> {
    return ctx.prisma.account.deleteMany(args);
  }
}
