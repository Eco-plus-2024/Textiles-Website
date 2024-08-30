import express from "express";
import { adminLogin, emailVerification, forgetPassword, getAdmin, getUser, UpdatePassword, userLogin, userRegister } from "../controller/authController.js";

const authRouter=express.Router();

authRouter.post('/register',userRegister)
authRouter.post('/verifyotp',emailVerification)
authRouter.post('/login',userLogin)
authRouter.post('/admin/login',adminLogin)
authRouter.get('/users',getUser)
authRouter.get('/admins',getAdmin)
authRouter.post('/forgetpassword',forgetPassword)
authRouter.post('/updatepassword',UpdatePassword)


export default authRouter