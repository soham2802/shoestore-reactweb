import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const order = await Order.create({
      user: req.user.id,
      customer: req.body.customer,
      items: req.body.items,
      subtotal: req.body.subtotal,
      total: req.body.total,
      orderStatus: "PENDING",
      paymentStatus: "UNPAID"
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("ORDER SAVE ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log("USER ID FROM TOKEN:", req.user.id);

    const orders = await Order.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    console.log("ORDERS FOUND:", orders.length);

    res.json(orders);
  } catch (error) {
    console.error("GET ORDERS ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});

router.put("/cancel/:id", authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.orderStatus === "DELIVERED") {
      return res.json({
        message: "Delivered order cannot be cancelled",
      });
    }

    order.orderStatus = "CANCELLED";
    await order.save();

    res.json({ message: "Order cancelled successfully" });
  } catch (error) {
    console.error("CANCEL ORDER ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});
router.put("/status/:id", authMiddleware, async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = orderStatus;
    await order.save();

    res.json({ message: "Order status updated", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
