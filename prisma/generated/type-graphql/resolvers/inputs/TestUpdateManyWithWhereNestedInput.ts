import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestScalarWhereInput } from "../inputs/TestScalarWhereInput";
import { TestUpdateManyDataInput } from "../inputs/TestUpdateManyDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpdateManyWithWhereNestedInput {
  @Field(_type => TestScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: TestScalarWhereInput;

  @Field(_type => TestUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TestUpdateManyDataInput;
}
