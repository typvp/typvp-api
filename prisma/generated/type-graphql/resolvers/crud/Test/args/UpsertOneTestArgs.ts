import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateInput } from "../../../inputs/TestCreateInput";
import { TestUpdateInput } from "../../../inputs/TestUpdateInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@ArgsType()
export class UpsertOneTestArgs {
  @Field(_type => TestWhereUniqueInput, { nullable: false })
  where!: TestWhereUniqueInput;

  @Field(_type => TestCreateInput, { nullable: false })
  create!: TestCreateInput;

  @Field(_type => TestUpdateInput, { nullable: false })
  update!: TestUpdateInput;
}
