import mongoose from "mongoose"
const Schema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },image:{
        type:String,
        required:true
    },
    types:{
      type:String,
      required:true,
      enum:["main","sub"]
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }
},{timestamps:true})

const categorySchema=mongoose.model('category',Schema)

export default categorySchema