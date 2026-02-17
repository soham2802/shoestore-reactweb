import mongoose from "mongoose";

const newArrivalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: Number,
    sale: Boolean,
    isBestSeller: Boolean,
    images: [String]
  },
  { timestamps: true }
);

export default mongoose.model("NewArrival", newArrivalSchema);
