import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialsInput } from "../inputs/AccountCreateWithoutTrialsInput";
import { AccountUpdateWithoutTrialsDataInput } from "../inputs/AccountUpdateWithoutTrialsDataInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpsertWithoutTrialsInput {
  @Field(_type => AccountUpdateWithoutTrialsDataInput, {
    nullable: false,
    description: undefined
  })
  update!: AccountUpdateWithoutTrialsDataInput;

  @Field(_type => AccountCreateWithoutTrialsInput, {
    nullable: false,
    description: undefined
  })
  create!: AccountCreateWithoutTrialsInput;
}
