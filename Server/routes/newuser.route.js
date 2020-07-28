const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const NewUser = require("../models/user/newuser.model");

router.route("/apply").post((req, res) => {
    const { email, skillSet, proficiency } = req.body;
    let skills = skillSet.split(",");
    const password = crypto.randomBytes(32).toString('hex');
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
        res.status(200).json(doc);
    });
});

module.exports = router;