import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestUpdateWithoutTrialDataInput } from "../inputs/TestUpdateWithoutTrialDataInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpdateWithWhereUniqueWithoutTrialInput {
  @Field(_type => TestWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TestWhereUniqueInput;

  @Field(_type => TestUpdateWithoutTrialDataInput, {
    nullable: false,
    description: undefined
  })
  data!: TestUpdateWithoutTrialDataInput;
}
