import { authenticator } from "otplib"

export const generateOTP=()=>{
    const secret = authenticator.generateSecret();
    const token= authenticator.generate(secret)
    console.log(token);
    
    return token
    
}

