import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestsInput } from "../inputs/AccountCreateWithoutTestsInput";
import { AccountUpdateWithoutTestsDataInput } from "../inputs/AccountUpdateWithoutTestsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpsertWithoutTestsInput {
  @Field(_type => AccountUpdateWithoutTestsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AccountUpdateWithoutTestsDataInput;

  @Field(_type => AccountCreateWithoutTestsInput, {
    nullable: false,
    description: undefined
  })
  create!: AccountCreateWithoutTestsInput;
}
