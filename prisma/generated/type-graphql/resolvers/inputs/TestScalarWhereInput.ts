import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { ResultTypeFilter } from "../inputs/ResultTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TrialFilter } from "../inputs/TrialFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestScalarWhereInput {
  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  account?: NullableStringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  correct?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  corrections?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  cpm?: IntFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  incorrect?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  rawCpm?: IntFilter | null;

  @Field(_type => ResultTypeFilter, {
    nullable: true,
    description: undefined
  })
  type?: ResultTypeFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  wordIndex?: IntFilter | null;

  @Field(_type => IntFilter, {
    nullable: true,
    description: undefined
  })
  wpm?: IntFilter | null;

  @Field(_type => TrialFilter, {
    nullable: true,
    description: undefined
  })
  Trial?: TrialFilter | null;

  @Field(_type => [TestScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TestScalarWhereInput[] | null;

  @Field(_type => [TestScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TestScalarWhereInput[] | null;

  @Field(_type => [TestScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TestScalarWhereInput[] | null;
}
