import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateWithoutTrialsInput } from "../inputs/AccountCreateWithoutTrialsInput";
import { AccountUpdateWithoutTrialsDataInput } from "../inputs/AccountUpdateWithoutTrialsDataInput";
import { AccountUpsertWithoutTrialsInput } from "../inputs/AccountUpsertWithoutTrialsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateOneWithoutTrialsInput {
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

  @Field(_type => AccountUpdateWithoutTrialsDataInput, {
    nullable: true,
    description: undefined
  })
  update?: AccountUpdateWithoutTrialsDataInput | null;

  @Field(_type => AccountUpsertWithoutTrialsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: AccountUpsertWithoutTrialsInput | null;
}
