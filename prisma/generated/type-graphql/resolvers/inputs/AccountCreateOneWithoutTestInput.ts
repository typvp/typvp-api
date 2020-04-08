import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTestInput } from "../inputs/AccountCreateWithoutTestInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountCreateOneWithoutTestInput {
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
}
