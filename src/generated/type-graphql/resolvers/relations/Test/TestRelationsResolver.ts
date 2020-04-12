import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { Account } from "../../../models/Account";
import { Test } from "../../../models/Test";
import { Trial } from "../../../models/Trial";

@Resolver(_of => Test)
export class TestRelationsResolver {
  @FieldResolver(_type => Trial, {
    nullable: true,
    description: undefined,
  })
  async trial(@Root() test: Test, @Ctx() ctx: any): Promise<Trial | null> {
    return ctx.prisma.test.findOne({
      where: {
        id: test.id,
      },
    }).trial({});
  }

  @FieldResolver(_type => Account, {
    nullable: false,
    description: undefined,
  })
  async account(@Root() test: Test, @Ctx() ctx: any): Promise<Account> {
    return ctx.prisma.test.findOne({
      where: {
        id: test.id,
      },
    }).account({});
  }
}
