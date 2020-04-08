import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountCreateOneWithoutTrialInput } from "../inputs/AccountCreateOneWithoutTrialInput";
import { Difficulty } from "../../enums/Difficulty";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialCreateWithoutTestInput {
  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  custom?: boolean | null;

  @Field(_type => Difficulty, {
    nullable: true,
    description: undefined
  })
  difficulty?: keyof typeof Difficulty | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  maxWordLength?: number | null;

  @Field(_type => Int, {
    nullable: true,
    description: undefined
  })
  minWordLength?: number | null;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  name!: string;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  private?: boolean | null;

  @Field(_type => Date, {
    nullable: false,
    description: undefined
  })
  updatedAt!: Date;

  @Field(_type => String, {
    nullable: false,
    description: undefined
  })
  wordSet!: string;

  @Field(_type => AccountCreateOneWithoutTrialInput, {
    nullable: true,
    description: undefined
  })
  Account?: AccountCreateOneWithoutTrialInput | null;
}
