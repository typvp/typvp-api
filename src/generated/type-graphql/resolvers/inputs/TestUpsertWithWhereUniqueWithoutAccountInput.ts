import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateWithoutAccountInput } from "../inputs/TestCreateWithoutAccountInput";
import { TestUpdateWithoutAccountDataInput } from "../inputs/TestUpdateWithoutAccountDataInput";
import { TestWhereUniqueInput } from "../inputs/TestWhereUniqueInput";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TestUpsertWithWhereUniqueWithoutAccountInput {
  @Field(_type => TestWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: TestWhereUniqueInput;

  @Field(_type => TestUpdateWithoutAccountDataInput, {
    nullable: false,
    description: undefined
  })
  update!: TestUpdateWithoutAccountDataInput;

  @Field(_type => TestCreateWithoutAccountInput, {
    nullable: false,
    description: undefined
  })
  create!: TestCreateWithoutAccountInput;
}
