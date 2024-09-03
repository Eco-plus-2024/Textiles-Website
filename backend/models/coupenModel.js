import mongoose from "mongoose";


const schema= mongoose.Schema({
    coupenName:{
        type:String,
        required:true
    },
    coupenCode:{
        type:String,
        required:true
    },
    type:['percentage','amount'],
    coupenValue:{
        type:Number,
        required:true
    },
           isActive:{
        type:Boolean,
        required:true,
        default :true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
},{timestamps:true})

const coupenSchema= mongoose.model('coupen',schema)

export default coupenSchema