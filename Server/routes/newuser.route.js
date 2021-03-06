const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const NewUser = require("../models/user/newuser.model");
const User = require("../models/user/user.model");


router.route("/").get(function (req, res) {
    NewUser.find(function (err, users) {
      if (err) {
        console.log(err);
      } else {
        res.json(users);
      }
    });
  });


router.route("/apply").post((req, res) => {
    const { email, skillSet, proficiency } = req.body;
    let skills = skillSet.split(",");
    const password = crypto.randomBytes(32).toString('hex');
    NewUser.find({ email: email,type:"skill" }, (err, doc) => {
        if (err) {
            console.log(err.message);
            return;
        }
        if (doc.length>0) {
            return res.send({ msg: "You have already applied for a skill based test, please keep an eye out on your inbox!" });
        }
        let newUser = new NewUser({
            email,
            password,
            skills,
            proficiency,
            member:false,
            type: "skill"
        });
        newUser.save((err, doc) => {
            if (err) {
                console.log(err.message);
                return;
            }
            res.status(200).send({
                msg: "You shall receive an email with the password to login to your test, stay tuned!",
                doc
            });
        });
    });
});

router.route("/applyCourse").post((req, res) => {
    const { email, skillSet, proficiency } = req.body;
    let skills = skillSet.split(",");
    const password = crypto.randomBytes(32).toString('hex');
    User.findOne({ emailAddress: email }, (err, doc) => {
        if (err) {
            console.log(err.message);
            return;
        }
        if (!doc) {
            return res.send({ msg: "You're not a registered user! Please register to apply for a course based test!" });
        }   
        NewUser.find({ email: email,type:"course" }, (err, doc) => {
            if (err) {
                console.log(err.message);
                return;
            }
           /* if (doc) {
                return res.send({ msg: "You have already applied for a skill based test, please keep an eye out on your inbox!" });
            }*/
            let newUser = new NewUser({
                email,
                password,
                skills,
                proficiency,
                member: true,
                type: "course"
            });
            newUser.save((err, doc) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                res.status(200).send({
                    msg: "You shall receive an email with the password to login to your test, stay tuned!",
                    doc
                });
            });
        });
    });
});

module.exports = router;