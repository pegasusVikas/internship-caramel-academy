const express = require("express");
const questionRoutes = express.Router();
const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// var csv = require("fast-csv");
// var json2csv = require("json2csv").parse;

// const app = express();
// app.use(fileUpload());

let Question = require("../models/question.model");

questionRoutes.route("/").get(function (req, res) {
  Question.find(function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      res.json(questions);
      // console.log(typeof questions);
    }
  });
});

questionRoutes.route("/:id").get(function (req, res) {
  // console.log(typeof req.params.id);
  let id = req.params.id;
  //console.log(Question);
  Question.findById(id, function (err, question) {
    res.json(question);
  });
});

questionRoutes.route("/create").post(function (req, res) {
  console.log(req.body);
  let question = new Question(req.body);
  question
    .save()
    .then((question) => {
      res.status(200).json({ question: "question added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new question failed");
      console.log(err);
    });
});

// courseRoutes.route("/update/:id").post(function (req, res) {
//   Course.findById(req.params.id, function (err, course) {
//     if (!course) {
//       res.status(404).send("Course not found");
//     } else {
//       course.course_name = req.body.course_name;
//       course.users_enrolled = req.body.users_enrolled;
//     }

//     course
//       .save()
//       .then((course) => {
//         res.json("Course Updated");
//       })
//       .catch((err) => {
//         res.status(400).send("Update not possisble");
//       });
//   });
// });

questionRoutes.route("/delete/:id").delete(function (req, res) {
  Question.findByIdAndDelete(req.params.id, function (err, question) {
    if (!question) {
      res.status(404).send("Question not found");
    } else {
      res.json("Question Deleted");
    }
  });
});

// questionRoutes.route("/upload").get(function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// questionRoutes.route("/upload").post(function (req, res) {
//   console.log("recieved");
//   //console.log(req.file);
//   if (!req.files) return res.status(400).send("No files were uploaded.");

//   var questionFile = req.files.file;
//   var questions = [];

//   csv
//     .parseString(questionFile.data.toString(), {
//       headers: true,
//       ignoreEmpty: true,
//     })
//     .on("data", function (data) {
//       data["_id"] = new mongoose.Types.ObjectId();
//       questions.push(data);
//     })
//     .on("end", function () {
//       for (let i = 0; i < questions.length; i++) {
//         questions[i].isOption1 = questions[i].isOption1.toLowerCase();
//         questions[i].isOption2 = questions[i].isOption2.toLowerCase();
//         questions[i].isOption3 = questions[i].isOption3.toLowerCase();
//         questions[i].isOption4 = questions[i].isOption4.toLowerCase();
//       }
//       // for (let i = 0; i < questions.length; i++) {
//       //   console.log(questions[i].isOption1);
//       //   console.log(questions[i].isOption2);
//       //   console.log(questions[i].isOption3);
//       //   console.log(questions[i].isOption4);
//       // }
//       Question.create(questions, function (err, documents) {
//         if (err) throw err;
//       });
//       res.send(
//         questions.length + " questions have been successfully uploaded."
//       );
//     });
// });

// questionRoutes.route("/template").get(function (req, res) {
//   var fields = [
//     "question_course",
//     "question_module",
//     "question_topic",
//     "question_level",
//     "question_type",
//     "question",
//     "answer",
//     "option1",
//     "option2",
//     "option3",
//     "option4",
//     "isOption1",
//     "isOption2",
//     "isOption3",
//     "isOption4",
//     "score",
//     "time",
//   ];
//   var csv = json2csv({ data: "", fields: fields });
//   res.set("Content-Disposition", "attachment;filename=questions.csv");
//   res.set("Content-Type", "application/octet-stream");

//   res.send(csv);
// });

module.exports = questionRoutes;
