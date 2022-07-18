import express from "express";
import productCtrl from "../controllers/productCtrl";

const router = express.Router();

router.get("/products", productCtrl.getProducts);

router.get("/product/:id", productCtrl.getProduct);

router.post("/product", productCtrl.createProduct);

router
  .route("/product/:id")
  .patch(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

export default router;
