import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateInput } from "../../../inputs/AccountCreateInput";

@ArgsType()
export class CreateOneAccountArgs {
  @Field(_type => AccountCreateInput, { nullable: false })
  data!: AccountCreateInput;
}
