import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutTrialInput } from "../inputs/TestCreateWithoutTrialInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestCreateManyWithoutTrialInput {
  @Field(_type => [TestCreateWithoutTrialInput], {
    nullable: true,
    description: undefined
  })
  create?: TestCreateWithoutTrialInput[] | null;

  @Field(_type => [TestWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TestWhereUniqueInput[] | null;
}
