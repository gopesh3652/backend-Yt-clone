import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONDODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB Connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`DB Connection Error : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
