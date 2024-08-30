import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    mobileNumber: {
      required: true,
      type: Number,
    },
    isActive: {
      required: true,
      type: Boolean,
      default:true
    },
    isAdmin: {
      required: true,
      type: Boolean,
      default:false
    },
  },
  { timestamps: true }
);

 const userDetails= mongoose.model("auth", userSchema);

 export default userDetails
