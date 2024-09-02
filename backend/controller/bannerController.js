import bannerSchema from "../models/bannerModel.js"

export const createBanner= async(req,res)=>{
    try {
        const {title1,title2,bannerName,bannerImage,buttonName,buttonLink,isActive} =req.body

        if(!title1||!title2||!bannerName||!bannerImage||!buttonLink||!buttonName){
         return res.json({message:'Please fill all feilds'})
        }
     
        const existingBanner= await bannerSchema.findMany({title1},{title2})
        if(existingBanner){
         return req.body({message:'The banner details already exist'})
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
        return res.json({message:'The banner details added successfully'})
        
    } catch (error) {
        return res.json({message:error})
    }

}