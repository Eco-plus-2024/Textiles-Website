import axios from "axios";

export const axiosInstane=axios.create({
    baseURL:"http://localhost:5001/api",
    timeout:5000,
    // withCredentials:true,
    headers:{
        "Content-Type":"application/json",
    }
})