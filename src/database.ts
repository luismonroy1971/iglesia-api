import mongoose from "mongoose";
import config from "./config/config";

export async function connectDB() {
  try {
    const db = await mongoose.connect(config.DB.URI);
    console.log("Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
