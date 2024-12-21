const mongoose = require('mongoose');


const blackListTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required: true,
        unique: true,
    },
    createdAT:{
        type: Date,
        default:Date.now,
        expires: 86400,//24 hour in seconds
    }
});
module.exports = mongoose.model('BlackListToken', blackListTokenSchema);