import { Request, Response } from "express";
import { Product } from "../entity/Product";
import { productRepository } from "../repositories/productRepository";

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
    try {
      const products = await productRepository.find();

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
