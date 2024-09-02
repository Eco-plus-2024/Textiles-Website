import mongoose from "mongoose";


const Schema= mongoose.Schema({
    title1:{
        type:String,
        required:true
    },
    title2:{
        type:String,
        required:true
    },
    bannerName:{
        type:String,
        required:true
    },
    bannerImage:{
        type:String,
        required:true
    },
    buttonLink:{
        type:String,
        required:true
    },
    buttonName:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default :true
    },
},{timestamps:true})

const bannerSchema= mongoose.model('banner',Schema)

export default bannerSchema
