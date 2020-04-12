import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestWhereInput } from "../../../inputs/TestWhereInput";

@ArgsType()
export class DeleteManyTestArgs {
  @Field(_type => TestWhereInput, { nullable: true })
  where?: TestWhereInput | null;
}
