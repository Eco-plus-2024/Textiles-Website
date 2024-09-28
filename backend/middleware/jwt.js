import jwt from "jsonwebtoken";


export const generatejwtToken=(payload)=>{
    try {
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'});
        return token
    } catch (error) {
        return json({message:error.message})
    }
}

export const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.json({ message: "Please provide the token" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      console.log(err.message);
      return res.json({ message: "Invalid Token" });
    } else {
        req.userId=decode.id
      next();
    }
  });
};
