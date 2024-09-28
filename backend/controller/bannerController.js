import mongoose from "mongoose"
import bannerSchema from "../models/bannerModel.js"

export const createBanner= async(req,res)=>{
    try {
        const {title1,title2,bannerName,bannerImage,buttonName,buttonLink,isActive} =req.body

        if(!title1||!title2||!bannerName||!bannerImage||!buttonLink||!buttonName){
         return res.json({message:'Please fill all feilds'})
        }
        const banner=new bannerSchema({
            title1,
            title2,
            bannerName,
            bannerImage,
            buttonLink,
            buttonName,
            isActive
        })
        await banner.save()
        return res.json({message:'The banner details added successfully',data:banner})
        
    } catch (error) {
        return res.json({message:error.message})
    }

}

export const editBanner=async(req,res)=>{
    try {
        const {id} =req.params
        const {title1,title2,bannerName,bannerImage,buttonLink,buttonName,isActive}=req.body
        if(!id){
            return res.json({message:'Id is required'})
        }
        const idvalidation=mongoose.Types.ObjectId.isValid(id)
    if(!idvalidation){
        return res.json({message:"mongodb Id validation failed"})
    }

    const bannerDetails= await bannerSchema.findByIdAndUpdate(id,{title1,title2,bannerName,bannerImage,buttonLink,buttonName,isActive})
    if(!bannerDetails){
        return res.json({message:'Id does not match'})
    }
    return res.json({message:'The banner details update successfully'})
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const deleteBanner= async(req,res)=>{
    try {
        const {id}= req.params
        if(!id){
            return res.json({message:'Id is required'})
        }
        const idvalidation= mongoose.Types.ObjectId.isValid(id)
        if(!idvalidation){
            return res.json({message:'Mongodb Id validation failed'})
        }
        const deleteBanner= await bannerSchema.findByIdAndDelete(id)
        if(!deleteBanner){
            return res.json({message:'The id not valid'})
        }
          return res.json({message:'The banner data delete successfully',data:deleteBanner})

          
        
    } catch (error) {
        return res.json({message:error.message})
    }
}

export const getBanner=async(req,res)=>{
    try {
        const {id} =req.params
        if(!id){
           const bannerDetails= await bannerSchema.find({isActive:true})
           return res.json({message:'The banner details fetched successfully',data:bannerDetails})
        }
           const idvalidation=mongoose.Types.ObjectId.isValid(id)
           if(!idvalidation){
            return res.json({message:'Mongodb id validation failed'})
           }
           const bannerDetail= await bannerSchema.findById(id)
           if(!bannerDetail){
            return res.json({message:'The does not match'})
           }
           return res.json({message:'The banner detail get by id is successfully fetched',data:bannerDetail})
        
    } catch (error) {
        return res.json({message:error.message})
    }
   


}