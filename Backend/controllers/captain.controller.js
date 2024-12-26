
const captainModel = require('../models/captain.model');
const userModel = require('../models/user.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator')
const blackListTokenModel = require('../models/blacklist.model')




module.exports.registerCaptain= async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;
    const isCaptainAlreadyExist = await captainModel.findOne({email});
    console.log(isCaptainAlreadyExist)
    if(isCaptainAlreadyExist){
        return res.status(400).json({message: "captain already exist"})

    }


    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email:email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
    })

    const token = captain.generateAuthToken();

    return res.status(201).json({token,captain});


    
}


module.exports.loginCaptain = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email, password }= req.body;
    const captain = await captainModel.findOne({ email }).select("+password");
    if(!captain){
        return res.status(401).json({message: "invalid email."})
    };

    const isPasswordMatched = await captain.comparePassword(password);
    if(!isPasswordMatched){
        return res.status(401).json({message:"invalid email."});
    }

    //generating password
    const token = await captain.generateAuthToken();
    res.cookie('token',token)


     res.status(200).json({token,captain});
    
}


module.exports.getCaptainProfile = async (req, res, next) => {
    
    res.status(200).json(req.captain);
    
}

module.exports.logoutCaptain= async(req,res, next) =>{
    
        res.clearCookie('token');
        const token = req.cookies.token  || req.headers.authorization.split(' ')[1];
    
        await blackListTokenModel.create({token: token});
        res.status(200).json({message: 'Logged out.'});
    
    

}