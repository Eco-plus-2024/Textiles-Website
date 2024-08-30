import express from "express";
import dotevn from 'dotenv';
import morgan from "morgan";
import bodyParser from "body-parser";
import authRouter from "./router/authRouter.js";
import productRouter from "./router/productRouter.js";
import mongodb from "./config/mongodb.js";


dotevn.config()

const app=express()

app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
   return res.sendStatus(200)
})

app.use('/api/auth',authRouter)
app.use('/api/product',productRouter)

const Port =process.env.PORT || 3001


app.listen(Port,()=>console.log(`http://localhost:${Port}`))