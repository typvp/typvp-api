import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@ArgsType()
export class DeleteOneTestArgs {
  @Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}
