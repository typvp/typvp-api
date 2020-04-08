import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountWhereInput } from "../inputs/AccountWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableBooleanFilter } from "../inputs/NullableBooleanFilter";
import { NullableDifficultyFilter } from "../inputs/NullableDifficultyFilter";
import { NullableIntFilter } from "../inputs/NullableIntFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TestFilter } from "../inputs/TestFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialWhereInput {
  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  custom?: NullableBooleanFilter | null;

  @Field(_type => NullableDifficultyFilter, {
    nullable: true,
    description: undefined
  })
  difficulty?: NullableDifficultyFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  maxWordLength?: NullableIntFilter | null;

  @Field(_type => NullableIntFilter, {
    nullable: true,
    description: undefined
  })
  minWordLength?: NullableIntFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  owner?: NullableStringFilter | null;

  @Field(_type => NullableBooleanFilter, {
    nullable: true,
    description: undefined
  })
  private?: NullableBooleanFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  wordSet?: StringFilter | null;

  @Field(_type => TestFilter, {
    nullable: true,
    description: undefined
  })
  Test?: TestFilter | null;

  @Field(_type => [TrialWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: TrialWhereInput[] | null;

  @Field(_type => [TrialWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: TrialWhereInput[] | null;

  @Field(_type => [TrialWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: TrialWhereInput[] | null;

  @Field(_type => AccountWhereInput, {
    nullable: true,
    description: undefined
  })
  Account?: AccountWhereInput | null;
}
