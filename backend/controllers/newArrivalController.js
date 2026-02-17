import NewArrival from "../models/NewArrival.js";

export const createManyNewArrivals = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res.status(400).json({
        message: "Request body must be an array"
      });
    }

    const arrivals = await NewArrival.insertMany(req.body);

    res.status(201).json({
      message: "New arrivals added successfully",
      count: arrivals.length,
      arrivals
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNewArrivals = async (req, res) => {
  try {
    const arrivals = await NewArrival.find().sort({ createdAt: -1 });
    res.json(arrivals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
