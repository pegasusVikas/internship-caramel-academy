require('../models/user/user.model');
const mongoose = require('mongoose');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
const userpasswordResetToken = require('../models/Reset Tokens/user-reset-token.model');
const User = mongoose.model('User');

module.exports.register = async (req, res, next) => {
    var user = new User();
    user.profile = req.body.profile;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.emailAddress = req.body.emailAddress;
    user.password = req.body.password;
    user.mobileNumber = req.body.mobileNumber;
    user.dateOfBirth = req.body.dateOfBirth;
    user.country = req.body.country;
    user.state = req.body.state;
    user.collegeName = req.body.collegeName;
    user.skillset = req.body.skillset.split(",");
    user.createdAt = req.body.createdAt;
    user.organization = req.body.organization;
    user.experience = req.body.experience;
    user.hasExperience = req.body.experience > 0 ? true : false;
    user.hasSkills = req.body.skillset.split(",").length > 0 ? true : false;
    try{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            user.password = hash;
            user.saltSecret = salt;
            user.save((err, doc) => {
                if (!err) {
                    try {
                        sgMail.setApiKey('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');
                        const msg = {
                            to: req.body.emailAddress,
                            from: 'viswa.es27@gmail.com',
                            subject: 'Caramel IT Academy - Registration',
                            text: 'You have successfully registered as a student at Caramel IT Academy!',
                        };
                        sgMail.send(msg);
                    } catch (err) {
                        console.log(err.message);
                    }
                    res.json({user:doc,registered:true});
                }
                else {
                    console.log(err);
                    res.json({registered:false});
                    // if (err.code == 11000)
                    //     res.status(422).send(['Duplicate email adrress found.']).;
                    // else
                    //     return next(err);
                }
        
            });
        });
    })
    }catch(err){
        res.json({registered:false,error:err.message});
    }
};

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('userLocal', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt(), logged:true, user: user });
        // unknown or wrong password
        else return res.status(401).json({ info:info,logged:false });
    })(req, res);
};

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user, ['firstName','lastName','emailAddress']) });
        }
    );
};

//Reset password Logic
module.exports.ResetPassword = async(req, res) => {
    if (!req.body.emailAddress) {
        return res
            .status(500)
            .json({ message: 'Email is required' });
    }
    const user = await User.findOne({
        emailAddress: req.body.emailAddress
    });
    if (!user) {
        return res
            .status(409)
            .json({ message: 'Email does not exist' });
    }
    var resettoken = new userpasswordResetToken({ _userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function (err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        userpasswordResetToken.find({ _userId: user._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
        res.status(200).json({ message: 'Reset Password successfully.' });
        try {
            sgMail.setApiKey('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');
            const msg = {
                to: req.body.emailAddress,
                from: 'viswa.es27@gmail.com',
                subject: 'Caramel IT Academy - Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
            sgMail.send(msg);
        } catch (err) {
            console.log(err.message);
        }
    });
};
    
module.exports.ValidPasswordToken = async(req, res) => {
    if (!req.body.resettoken) {
        return res
            .status(500)
            .json({ message: 'Token is required' });
    }
    const user = await userpasswordResetToken.findOne({
        resettoken: req.body.resettoken
    });
    if (!user) {
        return res
            .status(409)
            .json({ message: 'Invalid URL' });
    }
    User.findOneAndUpdate({ _id: user._userId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
    }).catch((err) => {
        return res.status(500).send({ msg: err.message });
    });
};

module.exports.NewPassword = async(req, res) => {
    userpasswordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
        if (!userToken) {
            return res
                .status(409)
                .json({ message: 'Token has expired' });
        }

        User.findOne({
            _id: userToken._userId
        }, function (err, userEmail, next) {
            if (!userEmail) {
                return res
                    .status(409)
                    .json({ message: 'Email not registered' });
            }
            return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                if (err) {
                    return res
                        .status(400)
                        .json({ message: 'Error hashing password' });
                }
                userEmail.password = hash;
                userEmail.save(function (err) {
                    if (err) {
                        return res
                            .status(400)
                            .json({ message: 'Password can not reset.' });
                    } else {
                        userToken.remove();
                        return res
                            .status(201)
                            .json({ message: 'Password reset successfully' });
                    }   
                });
            });
        });

    });
};

module.exports.list = async(req, res) => {
	User.find((err, docs) => {
		if (err) {console.log("list error: ", err.message); return; }
		return res.status(200).json({ docs });
	});
}