const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const userService = require('../services/user.service')



module.exports.registerUser = async (req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }


    const {fullname,email,password} = req.body;
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



