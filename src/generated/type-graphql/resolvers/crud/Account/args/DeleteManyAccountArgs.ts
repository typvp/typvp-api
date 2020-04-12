import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";

@ArgsType()
export class DeleteManyAccountArgs {
  @Field(_type => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | null;
}
