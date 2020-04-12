import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestsInput } from "../inputs/AccountCreateWithoutTestsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountCreateOneWithoutTestsInput {
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
}
