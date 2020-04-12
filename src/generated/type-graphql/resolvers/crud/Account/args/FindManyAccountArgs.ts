import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountOrderByInput } from "../../../inputs/AccountOrderByInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@ArgsType()
export class FindManyAccountArgs {
  @Field(_type => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | null;

  @Field(_type => AccountOrderByInput, { nullable: true })
  orderBy?: AccountOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => AccountWhereUniqueInput, { nullable: true })
  after?: AccountWhereUniqueInput | null;

  @Field(_type => AccountWhereUniqueInput, { nullable: true })
  before?: AccountWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
