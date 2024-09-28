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

    const coupenDetails=await coupenSchema.findOneAndUpdate(
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
    if(!coupenDetails){
        return res.json({message:'The id does not match'})
    }

    return res.json({ message: "The coupen details updated successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};


export const deleteCoupen= async( req,res)=>{
    try {
        const {id}= req.params
        if(!id){
           return res.json({message:'Id is required'})
        }
         const idvalidation= mongoose.Types.ObjectId.isValid(id)
         if(!idvalidation){
           return res.json({message:'The mongodb id validation failed'})
         }
         const coupenDetail= await coupenSchema.findByIdAndDelete(id)
         if(!coupenDetail){
            return res.json({message:'The id does not match'})
         }
         return res.json({message:'The coupen details delete successfully',data:coupenDetail})
        
    } catch (error) {
        return res.json({message:error.message})
    }
   
}

export const getCoupen= async(req,res)=>{
     try {
        const {id}= req.params
        if(!id){
             const coupenDetails= await coupenSchema.find()
             return res.json({message:'The coupenDetails data fetched successfully',data:coupenDetails})
        }
        const idvalidation = mongoose.Types.ObjectId.isValid(id)
        if(!idvalidation){
        return res.json({message:'The mongodb id validation failed'})
        }
        const coupenDetailById= await coupenSchema.findById(id)
        if(!coupenDetailById){
            return res.json({message:'The id deos not match'})
        }
        return res.json({message:'The get details by id fetched successfully',data:coupenDetailById})
        
     } catch (error) {
        return res.json({message:error.message})
     }
}