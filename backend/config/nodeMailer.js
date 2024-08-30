import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()


export const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    
    }
})

export const message =(recipientMail,Subject,html,text)=>{
    let message;
    return (message={
        from:process.env.EMAIL,
        to:recipientMail,
        subject:Subject,
        text:text,
        html:html,
    })
}

export const cb=(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent'+info.response);
    }
}
   