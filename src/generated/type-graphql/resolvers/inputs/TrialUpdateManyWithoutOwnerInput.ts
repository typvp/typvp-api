import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutOwnerInput } from "../inputs/TrialCreateWithoutOwnerInput";
import { TrialScalarWhereInput } from "../inputs/TrialScalarWhereInput";
import { TrialUpdateManyWithWhereNestedInput } from "../inputs/TrialUpdateManyWithWhereNestedInput";
import { TrialUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/TrialUpdateWithWhereUniqueWithoutOwnerInput";
import { TrialUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/TrialUpsertWithWhereUniqueWithoutOwnerInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateManyWithoutOwnerInput {
  @Field(_type => [TrialCreateWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutOwnerInput[] | null;

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

  @Field(_type => [TrialUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  update?: TrialUpdateWithWhereUniqueWithoutOwnerInput[] | null;

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

  @Field(_type => [TrialUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  upsert?: TrialUpsertWithWhereUniqueWithoutOwnerInput[] | null;
}
