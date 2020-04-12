import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { BooleanFilter } from "../inputs/BooleanFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { RoleFilter } from "../inputs/RoleFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TestFilter } from "../inputs/TestFilter";
import { TrialFilter } from "../inputs/TrialFilter";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountWhereInput {
  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  color?: NullableStringFilter | null;

  @Field(_type => BooleanFilter, {
    nullable: true,
    description: undefined
  })
  confirmed?: BooleanFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  lastPlayed?: NullableStringFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  lastSeen?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  password?: StringFilter | null;

  @Field(_type => RoleFilter, {
    nullable: true,
    description: undefined
  })
  role?: RoleFilter | null;

  @Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  username?: StringFilter | null;

  @Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  usernameLowercase?: NullableStringFilter | null;

  @Field(_type => TestFilter, {
    nullable: true,
    description: undefined
  })
  tests?: TestFilter | null;

  @Field(_type => TrialFilter, {
    nullable: true,
    description: undefined
  })
  trials?: TrialFilter | null;

  @Field(_type => [AccountWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: AccountWhereInput[] | null;

  @Field(_type => [AccountWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: AccountWhereInput[] | null;

  @Field(_type => [AccountWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: AccountWhereInput[] | null;
}
