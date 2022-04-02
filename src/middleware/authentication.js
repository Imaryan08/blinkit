const { reject } = require("bcrypt/promises")
const express = require("express")

require("dotenv").config();
var jwt = require("jsonwebtoken");

const verifytoken = (token) =>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,process.env.key, function(err, decoded){
            if(err)
            {
                return reject(err)
            }else{
                return resolve(decoded)
            }
        })
    })
}
const authentication = async (req,res,next)=>{

    if(!req.headers.authorization)
    {
        return res.status(400).send({message:"token not corrent"})
    }
    const token = req.headers.authorization.split(" ")[1];
    let decoded ;
    try {
        decoded = await verifytoken(token)
    } catch (error) {
        return res.status(400).send({message:"token not corrent"})
    }
    // console.log(decoded.userdata)
    req.user = decoded.userdata; /// login data 
    console.log(req.user)
    return next();
}
module.exports = authentication;