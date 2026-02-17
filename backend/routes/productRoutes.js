import express from "express";
import { getSaleProducts } from "../controllers/productController.js";

import {
  createProduct,
  createManyProducts,
  getAllProducts,
  getProductById,
  getBestSellers,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

/* CREATE */
router.post("/", createProduct);
router.post("/bulk", createManyProducts);


/* READ */
router.get("/", getAllProducts);
router.get("/sale", getSaleProducts);
router.get("/best-sellers", getBestSellers);
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProductById);



export default router;
