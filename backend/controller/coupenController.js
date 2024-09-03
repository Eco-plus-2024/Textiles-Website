import mongoose from "mongoose";
import coupenSchema from "../models/coupenModel.js";

export const createCoupen = async (req, res) => {
  try {
    const {
      coupenName,
      coupenCode,
      type,
      coupenValue,
      isActive,
      startDate,
      endDate,
     
    } = req.body;

    if (
      !coupenName ||
      !coupenCode ||
      !type ||
      !coupenValue ||
      !isActive ||
      !startDate ||
      !endDate 
      
    ) {
      return res.json({ message: "Please fill all feilds" });
    }
    const existingCoupencode = await coupenSchema.findOne({ coupenCode });
    if (existingCoupencode) {
      return res.json({ message: "The coupen code is already exist" });
    }
    const coupens = new coupenSchema({
      coupenName,
      coupenCode,
      type,
      coupenValue,
      isActive,
      startDate,
      endDate,
     
    });
    await coupens.save();
    return res.json({ message: "The coupen details created successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const editCoupen = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      coupenName,
      coupenCode,
      type,
      coupenValue,
      isActive,
      startDate,
      endDate,
    } = req.body;
    if (!id) {
      return res.json({ message: "Id is required " });
    }
    const idvalidation = mongoose.Types.ObjectId.isValid(id);
    if (!idvalidation) {
      return res.json({ message: "The mongodb id validation failed" });
    }

    await coupenSchema.findByIdAndUpdate(
      { _id: id, isActive: true },
      {
        coupenName,
        coupenCode,
        type,
        coupenValue,
        isActive,
        startDate,
        endDate,
      }
    );

    return res.json({ message: "The coupen details updated successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
