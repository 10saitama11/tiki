import { Request, Response } from "express";
import { Like } from "typeorm";
import { Product } from "../entity/Product";
import {
  ProductRepository,
  productRepository,
} from "../repositories/productRepository";

const PageConfig = (req: Request) => {
  const limit = Number(req.query.limit) * 1 || 48;
  const page = Number(req.query.page) * 1 || 1;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

const productCtrl = {
  // route: /api/product - method: 'POST',
  // description: 'Create a new product'
  // return: a new Product
  createProduct: async (req: Request, res: Response) => {
    try {
      const { name, price, discount, sku, short_description, discount_rate } =
        req.body;

      if (!name || !price)
        return res.json({ msg: "You need add name && Price" });
      const newProduct = productRepository.create({ ...req.body });
      await productRepository.save(newProduct);

      res.json(newProduct);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // route: /api/products - method: 'GET',
  // description: 'Get all products in Database, use Pagination, sort',
  // return: all products in Database
  getProducts: async (req: Request, res: Response) => {
    const { skip, limit } = PageConfig(req);
    const { sort, order_by, price } = req.query;

    let nameCol = sort;
    if (sort === "top_seller") {
      nameCol = "quantity_sold";
    }

    const priceArr = (price as string).split(",");
    let products;
    try {
      if (price) {
        products = await ProductRepository.priceProductsFilter({
          name: "price",
          minPrice: priceArr[0],
          maxPrice: priceArr[1],
          order_by: (order_by as string)?.toUpperCase() || "DESC",
          skip,
          take: limit,
        });
      } else {
        // Default sort newest date
        products = await ProductRepository.sortProducts({
          name: nameCol || "createAt",
          order_by: (order_by as string)?.toUpperCase() || "DESC",
          skip,
          take: limit,
        });
      }

      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // route: /api/product - method: 'GET',
  // description: 'Get a product by its ID',
  // return: all products in Database
  getProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await productRepository.findOneBy({ id });
      if (!product) return res.json({ msg: "Product not found" });

      res.json(product);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // route: /api/search_product - method: 'GET',
  // description: 'Find maximum 10 products have name contain keyword search',
  // return: all products with name contain keyword search
  searchProducts: async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const products = await productRepository.find({
        where: {
          name: Like(`%${name}%`),
        },
        order: {
          quantity_sold: "DESC",
        },
        take: 10,
        cache: true,
      });

      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // route: /api/product/:id - method: 'PATCH',
  // description: 'update a little property of a product',
  // return: notify
  updateProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, price, discount, sku, short_description, discount_rate } =
        req.body;

      if (!id) return res.json({ msg: "You need check Info path" });
      const product = await Product.createQueryBuilder()
        .update(Product)
        .set({ name, price, discount, sku, short_description, discount_rate })
        .where("id = :id", { id: id })
        .execute();

      res.json({ msg: "Update Product successfully", product });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

  // route: /api/product/:id - method: 'DELETE',
  // description: 'delete a product in the database',
  // return: notify
  deleteProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await Product.createQueryBuilder()
        .delete()
        .from(Product)
        .where("id = :id", { id: id })
        .execute();

      res.json({ msg: "Delete Product successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default productCtrl;
