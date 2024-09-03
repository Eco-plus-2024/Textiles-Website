import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('The MongoDB connection was successful');
  })
  .catch((e) => {
    console.log(e.message);
    console.log('The MongoDB connection failed');
  });
