import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

const app = express();
app.use(express.json());

app.listen(8080, () => {
  console.log("server is runnimg");
});
