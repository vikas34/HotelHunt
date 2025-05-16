import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
dotenv.config();

//DataBase Connection
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

app.use('/api/user', userRouter)