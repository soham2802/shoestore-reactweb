import express from "express";
import {
  createCollection,
  getCollections,
  autoCreateCollections
} from "../controllers/collectionController.js";

const router = express.Router();

router.post("/", createCollection);
router.get("/", getCollections);
router.post("/auto", autoCreateCollections);

export default router;
