// older method
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection error !!!", err);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Could not connect to express app ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port: ${process.env.PORT}`);
    });
    console.log("MongoDb Connected!!");
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
