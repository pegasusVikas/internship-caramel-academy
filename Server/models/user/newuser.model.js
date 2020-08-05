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
    type: {
        type: String,
        default: "skill"
    }
});

const NewUser = mongoose.model('NewUser', newUserSchema, "NewUser_Info");

module.exports = NewUser;