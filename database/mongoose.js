import mongoose from "mongoose";

import { DB_URL,NODE_ENV } from "../config/env.js";

if (!DB_URL) {
  throw new Error("DB_URL is not provided");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Database connected on ${NODE_ENV} mode successfully`);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
