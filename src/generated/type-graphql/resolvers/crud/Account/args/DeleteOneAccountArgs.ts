import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@ArgsType()
export class DeleteOneAccountArgs {
  @Field(_type => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}
