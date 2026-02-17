import express from "express";
import { getUsers, createUser, refreshAccessToken } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getUsers);
router.post("/register", createUser);
router.post("/refresh", refreshAccessToken);

export default router;
