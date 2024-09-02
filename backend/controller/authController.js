import { generateOTP } from "../config/generateOtp.js";
import { cb, message, transport } from "../config/nodeMailer.js";
import userDetails from "../models/authModel.js";
import bcrypt, { hash } from "bcrypt";

let userData, token;

export const userRegister = async (req, res) => {
  try {
    const { name, password, email, mobileNumber, conformPassword } = req.body;

    if (!name || !password || !email || !mobileNumber || !conformPassword) {
      return res.json({ message: "Please fill all feilds" });
    }
    const existingEmail = await userDetails.findOne({ email: email });
    

    const existingPhone = await userDetails.findOne({
      mobileNumber: mobileNumber,
    });
    if (existingEmail || existingPhone) {
      return res.json({ message: "Email or mobilenumber  already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 13);
    if (password !== conformPassword) {
      return res.json({ message: "password and confrompassword must be same" });
    }

    userData = {
      name,
      password: hashedPassword,
      email,
      mobileNumber,
    };
    token = generateOTP();
    const html = `<div>Your  OTP is: ${token} </div>`;
    const text = "For testing purpose";
    const subject = "Otp verification";
    const recipientMail = userData.email;
    const mail = message(recipientMail, subject, html, text);
    transport.sendMail(mail, cb);
    return res.json({ message: "Otp send successfully to you mail" });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const emailVerification = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (userData == null || token == null) {
      return res.json({ message: "Please register first" });
    }

    if (email != userData.email) {
      return res.json({ message: "Unauthorised sign up" });
    }

    if (otp != token) {
      return res.json({ message: "The OTP is invalid" });
    }
    const user = new userDetails(userData);
    await user.save();
    token = null;
    userData = null;
    return res.json({ message: "The OTP verification successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Please fill the all fields" });
    }

    const userDetail = await userDetails.findOne({ email, isActive: true });
    if (!userDetail) {
      return res.json({ message: "Your email is not register please sign up" });
    }

    const checkPassword = await bcrypt.compare(password, userDetail.password);
    if (!checkPassword) {
      return res.json({ message: "Unauthorised login" });
    }
    userDetail.password = null;
    return res.json({ message: "User logged successfully", data: userDetail });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "Please fill the all fields" });
    }
    const userDetail = await userDetails.findOne({
      email,
      isAdmin: true,
      isActive: true,
    });
    if (!userDetail) {
      return res.json({ message: "Your email not register please sign up" });
    }

    const checkPassword = await bcrypt.compare(password, userDetail.password);
    if (!checkPassword) {
      return res.json({ message: "Unauthorised login" });
    }
    userDetail.password = null;
    return res.json({ message: "Admin logged successfully", data: userDetail });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userDetail = await userDetails.find(
      { isAdmin: false },
      { password: 0 }
    );

    if (!userDetail) {
      return res.json({ message: "NO users found" });
    }

    return res.json({
      message: "User details fetched successfully",
      data: userDetail,
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const userDetail = await userDetails.find(
      { isAdmin: true },
      { password: 0 }
    );
    if (!userDetail) {
      return res.json({ message: "NO Admins found" });
    }
    console.log(userDetail);

    return res.json({
      message: "Admin details fetched successfully",
      data: userDetail,
    });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ message: "Please enter your email" });
    }
    const DBemail = await userDetails.findOne({ email });

    if (!DBemail) {
      return res.json({ message: "Your email not register please sign up" });
    }
    userData=DBemail
    token = generateOTP();
    const recipientMail = email;
    const Subject = "Forget Password";
    const html = `<div>Forget password otp is :${token}`;
    const text = "This is forget password otp";
    const mail = message(recipientMail, Subject, html, text);
    transport.sendMail(mail, cb);
    return res.json({ message: "Otp send to your register email" });
  } catch (error) {
    return res.json({ message: error });
  }
};

export const UpdatePassword = async (req, res) => {
  try {
    const { otp, email, password, conformpassword } = req.body;
    if (!otp || !email || !password || !conformpassword) {
      return res.json({ message: "Please fill all fields" });
    }
    if(userData==null||token==null){
      return res.json({message:'Please generate otp'})
    }
    if (otp != token) {
      return res.json({ message: "Your enter otp is incorrect" });
    }
    if(userData.email!=email){
      return res.json({message:'The email is doesnot match'})
    }
    
    const hashedpassword = await bcrypt.hash(password, 13);

    if (password != conformpassword) {
      return res.json({ message: "Please the conformpassword must be same" });
    }


    await userDetails.findOneAndUpdate(
      { _id: userData._id },
      { password: hashedpassword }
    );
    token = null;
    userData=null

    return res.json({ message: "The password update successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};
