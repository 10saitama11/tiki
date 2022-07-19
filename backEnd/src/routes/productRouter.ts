import express from "express";
import productCtrl from "../controllers/productCtrl";

const router = express.Router();

router.get("/listings", productCtrl.getProducts);

router.get("/listing/:id", productCtrl.getProduct);

router.get("/search_product", productCtrl.searchProducts);

router.post("/product", productCtrl.createProduct);

router
  .route("/product/:id")
  .patch(productCtrl.updateProduct)
  .delete(productCtrl.deleteProduct);

export default router;
