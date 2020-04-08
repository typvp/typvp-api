import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestInput } from "../inputs/AccountCreateWithoutTestInput";
import { AccountUpdateWithoutTestDataInput } from "../inputs/AccountUpdateWithoutTestDataInput";
import { AccountUpsertWithoutTestInput } from "../inputs/AccountUpsertWithoutTestInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateOneWithoutTestInput {
  @Field(_type => AccountCreateWithoutTestInput, {
    nullable: true,
    description: undefined
  })
  create?: AccountCreateWithoutTestInput | null;

  @Field(_type => AccountWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AccountWhereUniqueInput | null;

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

  @Field(_type => AccountUpdateWithoutTestDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AccountUpdateWithoutTestDataInput | null;

  @Field(_type => AccountUpsertWithoutTestInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AccountUpsertWithoutTestInput | null;
}
