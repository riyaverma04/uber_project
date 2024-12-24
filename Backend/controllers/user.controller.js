const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const blackListTokenModel= require('../models/blacklist.model')



module.exports.registerUser = async (req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }


    const {fullname,email,password} = req.body;
    const isUserExist = await userModel.findOne({email})
    if(isUserExist){
       return  res.status(400).json({message: 'user already exist.'})
    }
    console.log(req.body)

    //hashing password
    const hashedPassword = await userModel.hashPassword (password);
    //now inserting hashpassword into password
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hashedPassword

    });

    const token = user.generateAuthToken();
    res.status(201).json({token,user});


}



module.exports.loginUser = async (req,res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email, password} =  req.body;
    const user = await userModel.findOne({ email }).select("+password");


    if(!user){
        return res.status(401).json({message:"invalid email."});

    }


    //comparing password 
    const isMatched = await user.camparePassword(password);



    
    if(!isMatched){
        return res.status(401).json({message:"password didn't match  try again !!"});

    }




    //generating token
    const token = await user.generateAuthToken();
    console.log(user.email)
    res.cookie('token',token);
    res.status(200).json({token,user})
}






module.exports.getUserProfile = async (req, res, next )=>{
    res.status(200).json(req.user);
}


module.exports.logoutUser = async (req, res, next) =>{
    res.clearCookie('token');
    const token = req.cookies.token  || req.headers.authorization.split(' ')[1];

    await blackListTokenModel.create({token: token});
    res.status(200).json({message: 'Logged out.'});

}


