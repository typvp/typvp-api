import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestUpdateManyMutationInput } from "../../../inputs/TestUpdateManyMutationInput";
import { TestWhereInput } from "../../../inputs/TestWhereInput";

@ArgsType()
export class UpdateManyTestArgs {
  @Field(_type => TestUpdateManyMutationInput, { nullable: false })
  data!: TestUpdateManyMutationInput;

  @Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | null;
}
