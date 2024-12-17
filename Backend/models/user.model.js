const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSChema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minlength:[3,"First name must be at least 3 characters long"],

        },
        lastname:{
            type:String,
            
            minlength: [3,"last name must be at least 3 characters long"],
        }
    },
        email:{
            type:String,
            required:true,
            unique:true,
            minlength:[5,'Email must be at least 5 characters long'],
        },
        password:{
            type: String,
            required:true,
        },
        socketId:{
            type:String,
        }
    
})


// userSChema.methods.generateAuthToken= function() {
//     const token = jwt.sign({})
// }




userSChema.methods.generateAuthToken= function() {
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;

}



userSChema.methods.camparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}



userSChema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}



const userModel = mongoose.model('user',userSChema);
module.exports = userModel;