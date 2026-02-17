import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { customer, items, subtotal, total } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = await Order.create({
      customer,
      items,
      subtotal,
      total,
      orderStatus: "PENDING",
      paymentStatus: "UNPAID",
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error("GET ORDERS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
