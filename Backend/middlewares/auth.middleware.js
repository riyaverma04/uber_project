const userModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');
const captainModel = require('../models/captain.model');



module.exports.authUser = async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];//condition if headers.authorization present or not


    if(!token){
        return res.status(401).json({message:"unauthorized user"});
    }
    const isBlackListedToken = await blacklistModel.findOne({token: token});
    if(isBlackListedToken){
        return res.status(401).json({message: "unauthorized user"});
    } 

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();

    }catch(error){
        return res.status(401).json({message:"unauthorized."});

    }
}



module.exports.authCaptain = async (req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        res.status(401).json({message:"unauthorized captain"});

    }
    const isBlacklisted = await blacklistModel.findOne({ token });
    if(isBlacklisted){
        res.Status(401).json({ message: " unauthorized captain"});
    }


    //verify captain is authentic or not
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        
        req.captain = captain;
        // console.log(captain)
        return next();
        
    
        
    } catch (error) {
        res.status(401).json({message: error})
        
    }
}
