const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    emailSent: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    score: {
        type: Number,
        default: 0
    },
    skills: {
        type: Array,
        required: true
    },
    proficiency: {
        type: Number,
        required: true
    },
    member: {
        type: Boolean,
        default: false
    },
    type:{
        type:String,
        required:true
    }
},{timestamps:true});

const NewUser = mongoose.model('NewUser', newUserSchema, "NewUser_Info");

module.exports = NewUser;