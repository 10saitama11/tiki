import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

export const productRepository = AppDataSource.getRepository(Product);

export const ProductRepository = AppDataSource.getRepository(Product).extend({
  async sortProducts(value: any) {
    console.log("Value: ", value);
    return await this.createQueryBuilder("product")
      .select("product")
      .orderBy(`product.${value.name}`, value.order_by)
      .skip(value.skip)
      .take(value.take)
      .getMany();
  },
});
