import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestInput } from "../inputs/AccountCreateWithoutTestInput";
import { AccountUpdateWithoutTestDataInput } from "../inputs/AccountUpdateWithoutTestDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpsertWithoutTestInput {
  @Field(_type => AccountUpdateWithoutTestDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AccountUpdateWithoutTestDataInput;

  @Field(_type => AccountCreateWithoutTestInput, {
    nullable: false,
    description: undefined
  })
  create!: AccountCreateWithoutTestInput;
}
