import mongoose from "mongoose";
import brandSchema from "../models/brandModel.js";

export const createBrand = async (req, res) => {
  try {
    const { name, image, discription } = req.body;
    if (!name || !image || !discription) {
      return res.json({ message: "Please fill all fields" });
    }
    const existingBrand = await brandSchema.findOne({ name });
    if (existingBrand) {
      return res.json({ message: "The brand is already exist" });
    }
    const brandDetails = {
      name,
      image,
      discription,
    };
    const brand = new brandSchema(brandDetails);
    await brand.save();
    return res.json({ message: "The brand is added successfully",data:brand });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const editBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, discription ,isActive} = req.body;
   const idValidation= mongoose.Types.ObjectId.isValid(id)
   console.log(idValidation,"id validation");
   
   if(!idValidation){
    return res.json({message:'Mongodb id validation failed'})
   }
   const isExist= await brandSchema.findByIdAndUpdate({_id:id},{name, image, discription ,isActive});
   if(!isExist){
    return res.json({message:'The id does not match'})
   }
    return res.json({ message: "The brand update successfully" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const deleteBrand=async(req,res)=>{
      
}