import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestUpdateInput } from "../../../inputs/TestUpdateInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@ArgsType()
export class UpdateOneTestArgs {
  @Field(_type => TestUpdateInput, { nullable: false })
  data!: TestUpdateInput;

  @Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;
}
