import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("connected");
  await mongoose.connect(process.env.MONGO_URI);
};
