import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialInput } from "../inputs/AccountCreateWithoutTrialInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountCreateOneWithoutTrialInput {
  @Field(_type => AccountCreateWithoutTrialInput, {
    nullable: true,
    description: undefined
  })
  create?: AccountCreateWithoutTrialInput | null;

  @Field(_type => AccountWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AccountWhereUniqueInput | null;
}
