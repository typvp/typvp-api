import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { AccountUpdateOneWithoutTrialsInput } from "../inputs/AccountUpdateOneWithoutTrialsInput";
import { Difficulty } from "../../enums/Difficulty";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class TrialUpdateWithoutResultsDataInput {
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
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  private?: boolean | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  wordSet?: string | null;

  @Field(_type => AccountUpdateOneWithoutTrialsInput, {
    nullable: true,
    description: undefined
  })
  owner?: AccountUpdateOneWithoutTrialsInput | null;
}
