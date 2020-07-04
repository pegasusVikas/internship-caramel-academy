const express = require("express");
const testRoutes = express.Router();
const mongoose = require("mongoose");

let Test = require("../models/test.model");
let Student = require("../models/student.model");

//CREATE TEST ROUTE
testRoutes.route("/create").post(function (req, res) {
  let test = new Test(req.body);
  Student.find({ emailAddress: test.user_id }, function (err, student) {
    if (err) {
      console.log(err);
    } else {
      if (student[0]) {
        console.log("exists");
        test
          .save()
          .then((test) => {
            res.status(200).json({ test: "test added successfully" });
            //console.log(test);
            console.log("Test Added");
          })
          .catch((err) => {
            res.status(400).send("adding new test failed");
            console.log(err);
          });
      } else {
        console.log("not exist");
      }
    }
  });
});

//GET TESTS ROUTE
testRoutes.route("/").get(function (req, res) {
  Test.find(function (err, tests) {
    if (err) {
      console.log(err);
    } else {
      res.json(tests);
    }
  });
});

//LOGIN TEST ROUTE
testRoutes.route("/login").post(function (req, res) {
  console.log(req.body);
  console.log("Login Test Route");
  let id = req.body.password;
  let email = req.body.userid;
  Test.findById(id, function (err, test) {
    //console.log(test);
    if (err) {
      console.log(err);
    } else {
      if (
        test.user_id == email
        // &&  test.test_completed == false
      ) {
        console.log(test);
        res.json(test);
      }
    }
  });
});

//GET TEST ROUTE
testRoutes.route("/:id").get(function (req, res) {
  //console.log(req.body);
  let id = req.params.id;
  console.log("Get Test Route");
  Test.findById(id, function (err, test) {
    //console.log(test);
    if (err) {
      console.log(err);
    } else {
      // if(test.test_completed==false){
      res.json(test);
      // }
    }
  });
});

//UPDATE TEST ROUTE (FOR UPDATING ANSWERS GIVEN BY STUDENT AND SCORE)
testRoutes.route("/update/:id").post(function (req, res) {
  console.log("Test update Route");
  Test.findById(req.params.id, function (err, test) {
    if (!test) {
      res.status(404).send("Course not found");
    } else {
      questionList = req.body.question_list;
      var marks_scored = 0;
      questionList.forEach((question) => {
        var correct = false;
        if (question.answer_given != "") {
          console.log(question);
          console.log(question.answer_given);
          console.log(question.isOption2);
        }
        if (question.answer_given == "option1" && question.isOption1 === true) {
          correct = true;
        } else if (
          question.answer_given == "option2" &&
          question.isOption2 === true
        ) {
          correct = true;
        } else if (
          question.answer_given == "option3" &&
          question.isOption3 === true
        ) {
          correct = true;
        } else if (
          question.answer_given == "option4" &&
          question.isOption4 === true
        ) {
          correct = true;
        }
        if (correct == true) {
          marks_scored = marks_scored + question.score;
        }
      });
      test.question_list = questionList;
      test.marks_scored = marks_scored;
      test.test_started = req.body.test_started;
      test.test_completed = req.body.test_completed;
    }

    test
      .save()
      .then((test) => {
        //res.json("Test Updated");
        console.log(test);
        res.json(test);
      })
      .catch((err) => {
        res.status(400).send("Update not possisble");
      });
  });
});

module.exports = testRoutes;
