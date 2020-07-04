const express = require("express");
const coursetestRoutes = express.Router();
const mongoose = require("mongoose");

let Question = require("../models/question.model");

coursetestRoutes.route("/generate").post(function (req, res) {
  console.log("Course Test Route");
  console.log(req.body);
  Question.find({ question_type: "mcq" }, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      //console.log(questions);
      var mcqList = JSON.stringify(questions);
    }
    var spawn = require("child_process").spawn;

    var python = spawn("python", [
      "./python/CourseBased.py",
      req.body.userid,
      req.body.course,
      req.body.level,
      req.body.no_of_mcqs,
      req.body.no_of_ts,
      mcqList,
    ]);
    python.stdout.on("data", function (data) {
      mystr = data.toString();
      myjson = JSON.parse(mystr);
      //console.log(myjson);
      // res.json(myjson);
      idList1 = [];
      for (var i = 0; i < req.body.no_of_mcqs; i++) {
        idList1.push(myjson[i]);
      }
      console.log(idList1);
      res.json(idList1);
    });
  });

  Question.find({ question_type: "ts" }, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      console.log(questions);
      var tsList = JSON.stringify(questions);
    }
    var spawn = require("child_process").spawn;

    var python = spawn("python", [
      "./python/CourseBased2.py",
      req.body.userid,
      req.body.course,
      req.body.level,
      req.body.no_of_mcqs,
      req.body.no_of_ts,
      tsList,
    ]);
    python.stdout.on("data", function (data) {
      mystr = data.toString();
      myjson = JSON.parse(mystr);
      //console.log(myjson);
      // res.json(myjson);
      idList2 = [];
      for (var i = 0; i < req.body.no_of_ts; i++) {
        idList2.push(myjson[i]);
      }
      console.log(idList2);
      //res.json(idList2);
    });
  });
});

module.exports = coursetestRoutes;
