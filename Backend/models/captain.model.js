const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "firstname must contin aleast 3 letters"]
        },
        lastname: {
            type: String,
           minlength:[3, "lastname must contain atleast 3 letters"]
        }
    },
    email:{
        type: String,
        required: true,
       minlength:[5,'email must be  5 letters long']
    }, 
    password: {
        type: String,
        required: true,
       minlength: [6, "password must contain atleast 6 characters"]
    },
    soketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'inactive'
    },

    vehicle:{
        color:{
            type: String,
            required: true,
           minlength: [3, 'colour must be 3 letters long'],
        },
        plate:{
            type: String,
            required: true,
            minlength:[3, 'plate must be 3 letters long'],
        },

        capacity:{
            type: Number,
            requied: true,
            min:[1,'capacity must be atleast 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['motorcycle', 'auto-rickshaw', 'car']
        },
    },
    location:{
        lat:{
            type: Number,

        },
        lng:{
            type: Number
        }

    }
})



captainSchema.methods.generateAuthToken= function(){
 const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24hr'});
     return token;
}
captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}



const captainModel = mongoose.model('captain', captainSchema);
module.exports =captainModel;