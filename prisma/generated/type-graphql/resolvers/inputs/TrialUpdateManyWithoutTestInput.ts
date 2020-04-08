import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutTestInput } from "../inputs/TrialCreateWithoutTestInput";
import { TrialScalarWhereInput } from "../inputs/TrialScalarWhereInput";
import { TrialUpdateManyWithWhereNestedInput } from "../inputs/TrialUpdateManyWithWhereNestedInput";
import { TrialUpdateWithWhereUniqueWithoutTestInput } from "../inputs/TrialUpdateWithWhereUniqueWithoutTestInput";
import { TrialUpsertWithWhereUniqueWithoutTestInput } from "../inputs/TrialUpsertWithWhereUniqueWithoutTestInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateManyWithoutTestInput {
  @Field(_type => [TrialCreateWithoutTestInput], {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutTestInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: TrialWhereUniqueInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: TrialWhereUniqueInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: TrialWhereUniqueInput[] | null;

  @Field(_type => [TrialWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: TrialWhereUniqueInput[] | null;

  @Field(_type => [TrialUpdateWithWhereUniqueWithoutTestInput], {
    nullable: true,
    description: undefined
  })
  update?: TrialUpdateWithWhereUniqueWithoutTestInput[] | null;

  @Field(_type => [TrialUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: TrialUpdateManyWithWhereNestedInput[] | null;

  @Field(_type => [TrialScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: TrialScalarWhereInput[] | null;

  @Field(_type => [TrialUpsertWithWhereUniqueWithoutTestInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TrialUpsertWithWhereUniqueWithoutTestInput[] | null;
}
