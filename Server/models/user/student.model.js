const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const studentSchema = new mongoose.Schema({
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
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    saltSecret: String
});

// Custom validation for email
studentSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
studentSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

// Methods
studentSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

studentSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id,type:"student"},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const Student = mongoose.model('Student', studentSchema, 'Student_info');

module.exports = Student;