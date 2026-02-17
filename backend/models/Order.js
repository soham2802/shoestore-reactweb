import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      first: String,
      last: String,
      email: String,
      phone: String,
      address: String,
      city: String,
      pin: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        qty: Number,
        image: String,
      },
    ],

    subtotal: Number,
    shipping: { type: Number, default: 50 },
    total: Number,

    orderStatus: {
      type: String,
      enum: ["PENDING", "SHIPPED", "PLACED", "CANCELLED"],
      default: "PENDING",
    },
    paymentStatus: {
      type: String,
      default: "UNPAID",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Order", orderSchema);
