import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },

    category: {
      type: String,
      required: true,
      enum: ["Men", "Women"] 
    },

    price: {
      type: Number,
      required: true
    },

    oldPrice: {
      type: Number
    },

    sale: {
      type: Boolean,
      default: false
    },

    isBestSeller: {
      type: Boolean,
      default: false
    },

    images: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
