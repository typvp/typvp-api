import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateInput } from "../../../inputs/TestCreateInput";

@ArgsType()
export class CreateOneTestArgs {
  @Field(_type => TestCreateInput, { nullable: false })
  data!: TestCreateInput;
}
