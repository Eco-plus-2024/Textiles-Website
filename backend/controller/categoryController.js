import mongoose from "mongoose";
import categorySchema from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name, image, types } = req.body;
    if (!name || !image || !types) {
      return res.json({ message: "Please fill all feilds" });
    }
    const existingCategory = await categorySchema.findOne({ name });
    if (existingCategory) {
      return res.json({ message: "The category already exist" });
    }

    const category = new categorySchema({
      name,
      image,
      types,
    });
    await category.save();

    return res.json({ message: "Category added successfully",data:category });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const EditCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, image, types, isActive } = req.body;
    const isValid= mongoose.Types.ObjectId.isValid(id)
    if(!isValid){
      return res.json({message:'The mongodb id validation failed'})
    }

   const idExist= await categorySchema.findByIdAndUpdate(
      { _id: id },
      { name, image, types, isActive }
    );
    if(!idExist){
      return res.json({message:'The id does not matched'})
    }
    

    return res.json({ message: "The category Edit successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const deleteCategory = async (req, res) => {
    try {
        const {id}= req.params
      
       const isValidation=mongoose.Types.ObjectId.isValid(id)
       if(!isValidation){
        return res.json({message:'The mongodb id validation failed'})
       }    
       const deleteId= await categorySchema.findByIdAndDelete({_id:id});
       if(!deleteId){
        return res.json({message:'The id does not match any data'})
       }
      
        return res.json({ message: "the category delete succussfully" });
        
    } catch (error) {
        return res.json({message:error})
    }
 
};

export const getCategory = async (req, res) => {
  try {
    const { types, search } = req.query;
    const { id } = req.params;
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (id) {
      const categoryDetails = await categorySchema.findById(id);
      return res.json({ message: 'Category fetched successfully', data: categoryDetails });
    }

    let query = { isActive: true };

    if (types) {
      query.types = types;
    }

    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    }

    const categoryDetails = await categorySchema.find(query)
      .skip(skip)
      .limit(limit);

    const totalItems = await categorySchema.countDocuments(query);

    return res.json({
      message: 'Categories fetched successfully',
      data: categoryDetails,
      totalItems,
      currentPage: page,
      totalPages: Math.ceil(totalItems / limit),
    });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
