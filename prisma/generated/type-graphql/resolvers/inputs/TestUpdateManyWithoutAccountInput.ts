import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutAccountInput } from "../inputs/TestCreateWithoutAccountInput";
import { TestScalarWhereInput } from "../inputs/TestScalarWhereInput";
import { TestUpdateManyWithWhereNestedInput } from "../inputs/TestUpdateManyWithWhereNestedInput";
import { TestUpdateWithWhereUniqueWithoutAccountInput } from "../inputs/TestUpdateWithWhereUniqueWithoutAccountInput";
import { TestUpsertWithWhereUniqueWithoutAccountInput } from "../inputs/TestUpsertWithWhereUniqueWithoutAccountInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpdateManyWithoutAccountInput {
  @Field(_type => [TestCreateWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  create?: TestCreateWithoutAccountInput[] | null;

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

  @Field(_type => [TestUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  update?: TestUpdateWithWhereUniqueWithoutAccountInput[] | null;

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

  @Field(_type => [TestUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TestUpsertWithWhereUniqueWithoutAccountInput[] | null;
}
