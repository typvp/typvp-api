import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutAccountInput } from "../inputs/TrialCreateWithoutAccountInput";
import { TrialScalarWhereInput } from "../inputs/TrialScalarWhereInput";
import { TrialUpdateManyWithWhereNestedInput } from "../inputs/TrialUpdateManyWithWhereNestedInput";
import { TrialUpdateWithWhereUniqueWithoutAccountInput } from "../inputs/TrialUpdateWithWhereUniqueWithoutAccountInput";
import { TrialUpsertWithWhereUniqueWithoutAccountInput } from "../inputs/TrialUpsertWithWhereUniqueWithoutAccountInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateManyWithoutAccountInput {
  @Field(_type => [TrialCreateWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutAccountInput[] | null;

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

  @Field(_type => [TrialUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  update?: TrialUpdateWithWhereUniqueWithoutAccountInput[] | null;

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

  @Field(_type => [TrialUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TrialUpsertWithWhereUniqueWithoutAccountInput[] | null;
}
