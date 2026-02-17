import Collection from "../models/Collection.js";
import Product from "../models/Product.js";

/* CREATE */
export const createCollection = async (req, res) => {
  try {
    const collection = await Collection.create(req.body);
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* GET */
export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find().populate("products");
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* AUTO CREATE */
export const autoCreateCollections = async (req, res) => {
  try {
    const men = await Product.find({ category: "Men" }).select("_id");
    const women = await Product.find({ category: "Women" }).select("_id");

    await Collection.deleteMany({
      title: { $in: ["Men Collection", "Women Collection"] }
    });

    const menCollection = await Collection.create({
      title: "Men Collection",
      products: men.map(p => p._id)
    });

    const womenCollection = await Collection.create({
      title: "Women Collection",
      products: women.map(p => p._id)
    });

    res.json({ menCollection, womenCollection });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
