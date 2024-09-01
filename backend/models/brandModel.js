import mongoose from "mongoose";

const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    discription:{
        type:String,
        required:true,

    }
},{timestamps:true})

const brandSchema =mongoose.model('brands',Schema)

export default brandSchema