const express = require("express");
const skilltestRoutes = express.Router();
const mongoose = require("mongoose");

let Question = require("../models/question.model");

skilltestRoutes.route("/generate").post(function (req, res) {
  console.log("skill test");
  console.log(req.body);
  Question.find({ question_type: "mcq" }, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      var questionList = JSON.stringify(questions);
      var spawn = require("child_process").spawn;

      var python = spawn("python", [
        "./python/SkillBased.py",
        req.body.userid,
        req.body.total_skills,
        req.body.skill_name1,
        req.body.skill_name2,
        req.body.skill_name3,
        req.body.skill_name4,
        req.body.skill_name5,
        req.body.skill_prof,
        req.body.no_of_questions,
        req.body.category,
        questionList,
      ]);
    }
    python.stdout.on("data", function (data) {
      mystr = data.toString();
      myjson = JSON.parse(mystr);
      idList = [];
      for (var i = 0; i < req.body.no_of_questions; i++) {
        idList.push(myjson.Data._id[i]);
      }
      res.json(idList);
      console.log(idList);
    });
  });
});

module.exports = skilltestRoutes;
