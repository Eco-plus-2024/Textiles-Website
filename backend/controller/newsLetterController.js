import mongoose from "mongoose"
import newsLetterSchema from "../models/newsLetterModel.js"
import  validator  from "email-validator"


export const newsLetterCreate=async(req,res)=>{
    try {
        const {email,isActive}= req.body
     
        if(!email){
            return res.json({message:'Please fill the email field'})
        }
       const isValid= validator.validate(email)      
        if(isValid==false){
            return res.json({message:'The email format validation failed'})
        }
     const existingEmail = await newsLetterSchema.findOne({email})
     if(existingEmail){
        return res.json({message:'The email is already exist'})
     }
     const newsLetter= new newsLetterSchema({email,isActive})

     await newsLetter.save()
     return res.json({message:'The newsLetter created successfully'})

        
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const newsLetterGet= async(req,res)=>{
    try {
        const {id} =req.params
        if(!id){
            const newsLetterDetails=await newsLetterSchema.find({isActive:true})
            return res.json({message:'The newsletter details fetched successfully',data:newsLetterDetails})
        }
        const idvalidation= mongoose.Types.ObjectId.isValid(id)
        if(!idvalidation){
            return res.json({message:'The mongodb id validation failed'})
        }
        const newsLetterDetails= await newsLetterSchema.findOne({_id:id,isActive:true})
        if(!newsLetterDetails){
            return res.json({message:'The id does not match'})
        }
        return res.json({message:'The newletter details by id is fetch successfully',data:newsLetterDetails})

        
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const newsLetterDelete=async (req,res)=>{
    try {
        const {id}= req.params  
        if(!id){
            return res.json({message:'Id is required'})
        }
        const idvalidation= mongoose.Types.ObjectId.isValid(id)
        if(!idvalidation){
            return res.json({message:'The mongodb id validation failed'})
        }
        const deleteNewsLetter= await newsLetterSchema.findByIdAndDelete(id)
        if(!deleteNewsLetter){
            return res.json({message:'The id does not matched'})
        }
        return res.json({message:'The newsletter details delete successfully',data:deleteNewsLetter})
        
    } catch (error) {
        return res.json({message:error.message})
    }
}