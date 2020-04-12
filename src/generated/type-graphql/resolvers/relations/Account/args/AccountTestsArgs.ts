import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestOrderByInput } from "../../../inputs/TestOrderByInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";
import { TestWhereUniqueInput } from "../../../inputs/TestWhereUniqueInput";

@ArgsType()
export class AccountTestsArgs {
  @Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | null;

  @Field(_type => TestOrderByInput, { nullable: true })
  orderBy?: TestOrderByInput | null;

  @Field(_type => Int, { nullable: true })
  skip?: number | null;

  @Field(_type => TestWhereUniqueInput, { nullable: true })
  after?: TestWhereUniqueInput | null;

  @Field(_type => TestWhereUniqueInput, { nullable: true })
  before?: TestWhereUniqueInput | null;

  @Field(_type => Int, { nullable: true })
  first?: number | null;

  @Field(_type => Int, { nullable: true })
  last?: number | null;
}
