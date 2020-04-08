import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutTrialInput } from "../inputs/TestCreateWithoutTrialInput";
import { TestUpdateWithoutTrialDataInput } from "../inputs/TestUpdateWithoutTrialDataInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpsertWithWhereUniqueWithoutTrialInput {
  @Field(_type => TestWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TestWhereUniqueInput;

  @Field(_type => TestUpdateWithoutTrialDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TestUpdateWithoutTrialDataInput;

  @Field(_type => TestCreateWithoutTrialInput, {
    nullable: false,
    description: undefined
  })
  create!: TestCreateWithoutTrialInput;
}
