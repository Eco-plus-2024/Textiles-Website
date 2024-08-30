import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

 export default mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('the mongodb connected success');
    
}).catch((e)=>{
    console.log(e.message);
    
    console.log('the mongodb connected failed');
    
})

