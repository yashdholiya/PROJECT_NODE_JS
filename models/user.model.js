const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    Name: {
        type: String
    },
    profileImage:{
        type : String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNo:{
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users',userSchema);