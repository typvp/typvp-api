import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountUpdateInput } from "../../../inputs/AccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@ArgsType()
export class UpdateOneAccountArgs {
  @Field(_type => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;

  @Field(_type => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}
