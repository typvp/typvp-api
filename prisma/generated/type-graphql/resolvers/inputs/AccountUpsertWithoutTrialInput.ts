import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialInput } from "../inputs/AccountCreateWithoutTrialInput";
import { AccountUpdateWithoutTrialDataInput } from "../inputs/AccountUpdateWithoutTrialDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpsertWithoutTrialInput {
  @Field(_type => AccountUpdateWithoutTrialDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AccountUpdateWithoutTrialDataInput;

  @Field(_type => AccountCreateWithoutTrialInput, {
    nullable: false,
    description: undefined
  })
  create!: AccountCreateWithoutTrialInput;
}
