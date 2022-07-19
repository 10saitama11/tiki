import { Request, Response } from "express";
import { Like, Repository } from "typeorm";
import { Product } from "../entity/Product";
import {
  ProductRepository,
  productRepository,
} from "../repositories/productRepository";

const PageConfig = (req: Request) => {
  const limit = Number(req.query.limit) * 1 || 9;
  const page = Number(req.query.page) * 1 || 1;
  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

const productCtrl = {
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

  getProducts: async (req: Request, res: Response) => {
    const { skip, limit } = PageConfig(req);
    const { sort, order_by } = req.query;
    try {
      // Default sort newest date
      const products = await ProductRepository.sortProducts({
        name: sort || "createAt",
        order_by: (order_by as string)?.toUpperCase() || "DESC",
        skip,
        take: limit,
      });

      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

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

  sortProducts: async (req: Request, res: Response) => {
    const { skip, limit } = PageConfig(req);
    try {
      const products = await productRepository.find({
        skip,
        take: limit,
      });

      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },

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
