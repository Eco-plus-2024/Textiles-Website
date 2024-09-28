import mongoose from "mongoose";


const schema= mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }
})

const newsLetterSchema= mongoose.model('newletter',schema)
 
export default newsLetterSchema