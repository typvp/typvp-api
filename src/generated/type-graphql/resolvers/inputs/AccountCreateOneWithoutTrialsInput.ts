import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialsInput } from "../inputs/AccountCreateWithoutTrialsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountCreateOneWithoutTrialsInput {
  @Field(_type => AccountCreateWithoutTrialsInput, {
    nullable: true,
    description: undefined
  })
  create?: AccountCreateWithoutTrialsInput | null;

  @Field(_type => AccountWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: AccountWhereUniqueInput | null;
}
