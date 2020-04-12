import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { TestCreateManyWithoutAccountInput } from "../inputs/TestCreateManyWithoutAccountInput";
import { TrialCreateManyWithoutOwnerInput } from "../inputs/TrialCreateManyWithoutOwnerInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class AccountCreateInput {
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
    nullable: false,
    description: undefined
  })
  email!: string;

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
    nullable: false,
    description: undefined
  })
  password!: string;

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
    nullable: false,
    description: undefined
  })
  username!: string;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  usernameLowercase?: string | null;

  @Field(_type => TestCreateManyWithoutAccountInput, {
    nullable: true,
    description: undefined
  })
  tests?: TestCreateManyWithoutAccountInput | null;

  @Field(_type => TrialCreateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  trials?: TrialCreateManyWithoutOwnerInput | null;
}
