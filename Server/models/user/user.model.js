const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    profile: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    emailAddress: {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required : true
    },
    mobileNumber: {
        type: Number
    },
    dateOfBirth: {
        type: Date
    },
    country:{
        type: String
    },
    state:{
        type: String
    },
    collegeName:{
        type: String
    },
    skillset: {
        type: Array
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    organization: {
        type: String
    },
    experience: {
        type: Number
    },
    hasSkills: {
        type: Boolean
    },
    hasExperience: {
        type: Boolean
    },
    saltSecret: String
});

// Custom validation for email
userSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const User = mongoose.model('User', userSchema, 'User_info');

module.exports = User;