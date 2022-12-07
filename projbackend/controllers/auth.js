const mongoose = require("mongoose")
const { check,validationResult } = require('express-validator');
const User = require("../models/user.js")

exports.signout = (req,res)=>{
    res.json({
        message:"User Signout"
    })
};

exports.signup = (req,res)=>{
const errors = validationResult(req);

if(!errors.isEmpty()){
return res.status(422).json({
    errors: errors.array()
});
}
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json(
             {err:"Failed to save user in Database"}
            )
        }
        res.json({
            name: user.firstName,
            email:user.email
        })
    })
}