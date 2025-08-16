import { ObjectType, Field, ID, Float, InputType } from "type-graphql";

@ObjectType()
export class Product {
  @Field(() => ID)
  declare id: string;

  @Field(() => String)
  declare name: string;

  @Field(() => String, { nullable: true })
  declare description?: string;

  @Field(() => Float)
  declare price: number;

  // New field to be resolved via FieldResolver
  @Field(() => Float)
  declare discountedPrice: number;
}

@InputType()
export class ProductInput {
  @Field(() => String)
  declare name: string;

  @Field(() => String, { nullable: true })
  declare description?: string;

  @Field(() => Float)
  declare price: number;
}
