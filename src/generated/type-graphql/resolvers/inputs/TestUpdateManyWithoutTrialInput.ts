import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutTrialInput } from "../inputs/TestCreateWithoutTrialInput";
import { TestScalarWhereInput } from "../inputs/TestScalarWhereInput";
import { TestUpdateManyWithWhereNestedInput } from "../inputs/TestUpdateManyWithWhereNestedInput";
import { TestUpdateWithWhereUniqueWithoutTrialInput } from "../inputs/TestUpdateWithWhereUniqueWithoutTrialInput";
import { TestUpsertWithWhereUniqueWithoutTrialInput } from "../inputs/TestUpsertWithWhereUniqueWithoutTrialInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpdateManyWithoutTrialInput {
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

  @Field(_type => [TestWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TestWhereUniqueInput[] | null;

  @Field(_type => [TestWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TestWhereUniqueInput[] | null;

  @Field(_type => [TestWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TestWhereUniqueInput[] | null;

  @Field(_type => [TestUpdateWithWhereUniqueWithoutTrialInput], {
    nullable: true,
    description: undefined
  })
  update?: TestUpdateWithWhereUniqueWithoutTrialInput[] | null;

  @Field(_type => [TestUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TestUpdateManyWithWhereNestedInput[] | null;

  @Field(_type => [TestScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TestScalarWhereInput[] | null;

  @Field(_type => [TestUpsertWithWhereUniqueWithoutTrialInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TestUpsertWithWhereUniqueWithoutTrialInput[] | null;
}
