import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { Account } from "../../../models/Account";
import { BatchPayload } from "../../outputs/BatchPayload";

@Resolver(_of => Account)
export class UpdateManyAccountResolver {
  @Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyAccount(@Ctx() ctx: any, @Args() args: UpdateManyAccountArgs): Promise<BatchPayload> {
    return ctx.prisma.account.updateMany(args);
  }
}
