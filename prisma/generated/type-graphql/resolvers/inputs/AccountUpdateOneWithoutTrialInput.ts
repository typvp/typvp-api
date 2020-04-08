import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialInput } from "../inputs/AccountCreateWithoutTrialInput";
import { AccountUpdateWithoutTrialDataInput } from "../inputs/AccountUpdateWithoutTrialDataInput";
import { AccountUpsertWithoutTrialInput } from "../inputs/AccountUpsertWithoutTrialInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateOneWithoutTrialInput {
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

  @Field(_type => AccountUpdateWithoutTrialDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AccountUpdateWithoutTrialDataInput | null;

  @Field(_type => AccountUpsertWithoutTrialInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AccountUpsertWithoutTrialInput | null;
}
