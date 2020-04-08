import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountUpdateManyMutationInput } from "../../../inputs/AccountUpdateManyMutationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";

@ArgsType()
export class UpdateManyAccountArgs {
  @Field(_type => AccountUpdateManyMutationInput, { nullable: false })
  data!: AccountUpdateManyMutationInput;

  @Field(_type => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | null;
}
