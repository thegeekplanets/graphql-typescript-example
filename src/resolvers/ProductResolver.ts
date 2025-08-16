import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Product, ProductInput } from "../types/Product";

const PRODUCTS: Product[] = [];
const PRODUCT_ADDED = "PRODUCT_ADDED";

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  getAllProducts(): Product[] {
    return PRODUCTS;
  }

  @Query(() => Product, { nullable: true })
  getProductById(@Arg("id") id: string): Product | undefined {
    return PRODUCTS.find((p) => p.id === id);
  }

  @Mutation(() => Product)
  async addProduct(@Arg("data") data: ProductInput): Promise<Product> {
    const product: Product = {
      id: (PRODUCTS.length + 1).toString(),
      ...data,
      discountedPrice: 0, // Placeholder, will be resolved by FieldResolver
    };
    PRODUCTS.push(product);
    console.log(PRODUCT_ADDED, product);
    return product;
  }

  @Mutation(() => Boolean)
  async removeProduct(@Arg("id") id: string): Promise<boolean> {
    const index = PRODUCTS.findIndex((p) => p.id === id);
    if (index === -1) return false;
    PRODUCTS.splice(index, 1);
    console.log("PRODUCT_REMOVED", id);
    return true;
  }

  // Field resolver for discountedPrice
  @FieldResolver(() => Number)
  discountedPrice(@Root() product: Product): number {
    const discountPercentage = 0.1; // 10% discount
    return product.price - product.price * discountPercentage;
  }
}
