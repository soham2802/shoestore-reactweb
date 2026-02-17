import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    mobile: String,
    dob: String,
    address: String
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
