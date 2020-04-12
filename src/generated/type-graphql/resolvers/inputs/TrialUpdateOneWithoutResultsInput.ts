import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialCreateWithoutResultsInput } from "../inputs/TrialCreateWithoutResultsInput";
import { TrialUpdateWithoutResultsDataInput } from "../inputs/TrialUpdateWithoutResultsDataInput";
import { TrialUpsertWithoutResultsInput } from "../inputs/TrialUpsertWithoutResultsInput";
import { TrialWhereUniqueInput } from "../inputs/TrialWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateOneWithoutResultsInput {
  @Field(_type => TrialCreateWithoutResultsInput, {
    nullable: true,
    description: undefined
  })
  create?: TrialCreateWithoutResultsInput | null;

  @Field(_type => TrialWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: TrialWhereUniqueInput | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @Field(_type => TrialUpdateWithoutResultsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: TrialUpdateWithoutResultsDataInput | null;

  @Field(_type => TrialUpsertWithoutResultsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: TrialUpsertWithoutResultsInput | null;
}
