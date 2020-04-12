import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateInput } from "../../../inputs/AccountCreateInput";
import { AccountUpdateInput } from "../../../inputs/AccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@ArgsType()
export class UpsertOneAccountArgs {
  @Field(_type => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @Field(_type => AccountCreateInput, { nullable: false })
  create!: AccountCreateInput;

  @Field(_type => AccountUpdateInput, { nullable: false })
  update!: AccountUpdateInput;
}
