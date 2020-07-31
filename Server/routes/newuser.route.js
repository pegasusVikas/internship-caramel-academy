const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const NewUser = require("../models/user/newuser.model");

router.route("/apply").post((req, res) => {
    const { email, skillSet, proficiency } = req.body;
    let skills = skillSet.split(",");
    const password = crypto.randomBytes(32).toString('hex');
    NewUser.find({ email: email }, (err, doc) => {
        if (err) {
            console.log(err.message);
            return;
        }
        if (!doc) {
            return res.send({ msg: "You have already applied for a skill based test, please keep an eye out on your inbox!" });
        }
        let newUser = new NewUser({
            email,
            password,
            skills,
            proficiency
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

module.exports = router;