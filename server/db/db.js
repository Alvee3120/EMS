import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://fazlahalvee20:LFf3YpJkcUQncaJu@cluster0.txqngea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

export default connectToDatabase;