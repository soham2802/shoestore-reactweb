import express from "express";
import {
  createManyNewArrivals,
  getNewArrivals
} from "../controllers/newArrivalController.js";

const router = express.Router();

router.post("/bulk", createManyNewArrivals);
router.get("/", getNewArrivals);

export default router;
