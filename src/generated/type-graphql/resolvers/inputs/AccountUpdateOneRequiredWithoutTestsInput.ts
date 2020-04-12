import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestsInput } from "../inputs/AccountCreateWithoutTestsInput";
import { AccountUpdateWithoutTestsDataInput } from "../inputs/AccountUpdateWithoutTestsDataInput";
import { AccountUpsertWithoutTestsInput } from "../inputs/AccountUpsertWithoutTestsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateOneRequiredWithoutTestsInput {
  @Field(_type => AccountCreateWithoutTestsInput, {
    nullable: true,
    description: undefined
  })
  create?: AccountCreateWithoutTestsInput | null;

  @Field(_type => AccountWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AccountWhereUniqueInput | null;

  @Field(_type => AccountUpdateWithoutTestsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AccountUpdateWithoutTestsDataInput | null;

  @Field(_type => AccountUpsertWithoutTestsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AccountUpsertWithoutTestsInput | null;
}
