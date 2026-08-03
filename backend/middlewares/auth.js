const User = require('../models/User.model');
const blacklist = require('../models/TokenBlacklist.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.body;
    if(!token){
        return res.status(404).json({
            success : false,
            message : "no token found"
        })
    }
    const checkBlacklist = await blacklist.findOne({token});
    if(checkBlacklist){
        return res.status(401).json({
            success : false,
            message : "Invalid token",
        })
    }

    //verify the token 
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    console.log(decode);
    req.user = decode;
    next();
    }catch(error){
         return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
}