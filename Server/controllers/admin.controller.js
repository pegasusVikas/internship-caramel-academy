require('../models/user/admin.model');
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const passwordResetToken = require('../models/Reset Tokens/admin-reset-token.model');

const Admin = mongoose.model('Admin');

module.exports.register = (req, res, next) => {
    var admin = new Admin();
    admin.adminName = req.body.adminName;
    admin.emailAddress = req.body.emailAddress;
    admin.password = req.body.password;
    admin.mobileNumber = req.body.mobileNumber;
    admin.createdAt = req.body.createdAt;
    admin.save((err, doc) => {
        if (!err) {
            try {
                sgMail.setApiKey('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');
                const msg = {
                    to: req.body.emailAddress,
                    from: 'viswa.es27@gmail.com',
                    subject: 'Caramel IT Academy - Registration',
                    text: 'You have successfully registered as an Admin at Caramel IT Academy!',
                };
                sgMail.send(msg);
            } catch (err) {
                console.log(err.message);
			}
            res.json({registered:true});
        }
        else {
            if (err.code == 11000)
                res.status(422).json({message:'Duplicate email adrress found.',registered:false});
            else
                return next(err);
        }

    });
}
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('adminLocal', (err, admin, info) => {
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered corporationm

        if (admin) return res.status(200).json({ "admin": admin, "token": admin.generateJwt() ,logged:true});
        // unknown or wrong password
        else return res.status(401).json({info:info, logged:false});
    })(req, res);
}

module.exports.adminProfile = (req, res, next) => {
    Admin.findOne({ _id: req._id },
        (err, admin) => {
            if (!admin)
                return res.status(404).json({ status: false, message: 'Record not found.' });
            else
                return res.status(200).json({ status: true, admin: _.pick(admin, ['adminName']) });
        }
    );
}

//Reset password Logic
module.exports.ResetPassword = async(req, res) => {
    if (!req.body.emailAddress) {
        return res
            .status(500)
            .json({ message: 'Email is required' });
    }
    const admin = await Admin.findOne({
        emailAddress: req.body.emailAddress
    });
    if (!admin) {
        return res
            .status(409)
            .json({ message: 'Email does not exist' });
    }
    var resettoken = new passwordResetToken({ _adminId: admin._id, resettoken: crypto.randomBytes(16).toString('hex') });
    resettoken.save(function(err) {
        if (err) { return res.status(500).send({ msg: err.message }); }
        passwordResetToken.find({ _adminId: admin._id, resettoken: { $ne: resettoken.resettoken } }).remove().exec();
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
    })
}

module.exports.ValidPasswordToken = async(req, res) => {
    if (!req.body.resettoken) {
        return res
            .status(500)
            .json({ message: 'Token is required' });
    }
    const admin = await passwordResetToken.findOne({
        resettoken: req.body.resettoken
    });
    if (!admin) {
        return res
            .status(409)
            .json({ message: 'Invalid URL' });
    }
    Admin.findOneAndUpdate({ _id: admin._adminId }).then(() => {
        res.status(200).json({ message: 'Token verified successfully.' });
    }).catch((err) => {
        return res.status(500).send({ msg: err.message });
    });
}

module.exports.NewPassword = async(req, res) => {
    passwordResetToken.findOne({ resettoken: req.body.resettoken }, function(err, adminToken, next) {
        if (!adminToken) {
            return res
                .status(409)
                .json({ message: 'Token has expired' });
        }

        Admin.findOne({
            _id: adminToken._adminId
        }, function(err, adminEmail, next) {
            if (!adminEmail) {
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
                adminEmail.password = hash;
                adminEmail.save(function(err) {
                    if (err) {
                        return res
                            .status(400)
                            .json({ message: 'Password can not reset.' });
                    } else {
                        adminToken.remove();
                        return res
                            .status(201)
                            .json({ message: 'Password reset successfully' });
                    }

                });
            });
        });

    })
}