import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestUpdateManyWithoutAccountInput } from "../inputs/TestUpdateManyWithoutAccountInput";
import { TrialUpdateManyWithoutAccountInput } from "../inputs/TrialUpdateManyWithoutAccountInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountUpdateInput {
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

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastPlayed?: string | null;

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

  @Field(_type => TestUpdateManyWithoutAccountInput, {
    nullable: true,
    description: undefined
  })
  Test?: TestUpdateManyWithoutAccountInput | null;

  @Field(_type => TrialUpdateManyWithoutAccountInput, {
    nullable: true,
    description: undefined
  })
  Trial?: TrialUpdateManyWithoutAccountInput | null;
}
