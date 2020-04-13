import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TrialUpdateManyWithoutOwnerInput } from "../inputs/TrialUpdateManyWithoutOwnerInput";
import { ResultType } from "../../enums/ResultType";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateWithoutTestsDataInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  color?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  confirmed?: boolean | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => ResultType, {
    nullable: true,
    description: undefined
  })
  lastPlayed?: keyof typeof ResultType | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  lastSeen?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  password?: string | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  username?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  usernameLowercase?: string | null;

  @Field(_type => TrialUpdateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  trials?: TrialUpdateManyWithoutOwnerInput | null;
}
