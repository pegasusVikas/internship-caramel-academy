const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path")
const TableSchema = require("../models/course/table.model");
const Question = require("../models/question.model")
const mongoose = require('mongoose');
const Table = mongoose.model("Table", TableSchema);
var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require("tabletojson");
const fs = require("fs");
("use strict");

router.get("/", (req, res) => res.send("Use Postman"));


var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      console.log(__dirname)
      cb(null, path.resolve(__dirname, "./questions/"))
  },
  // By default, multer removes file extensions so let's add them back
  filename: function(req, file, cb) {
      cb(null, file.originalname )
  }
});

//Configure multer
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      console.log('FILEFILTTER ROUTE UPLOAD LESSON');
      // allow doc only
      if (!file.originalname.match(/\.(doc|docx)$/)) {
          return cb(new Error('Only doc are allowed.'), false);
      }
      cb(null, true);
  }
});

router.route("/template").get(function (req, res) {
  
  res.sendFile(__dirname + "/questions/QBtemplate.docx");
});

router.post('/upload/questions', upload.single('upload'), (req, res) => {
  console.log("req.file = ", req.file);
  console.log("req.body = ", req.body);
  try {
      const lesson = req.file;
      if (!lesson) {
          console.log("shet");
          return res.status(400).send({
              status: false,
              data: 'No file is selected.'
          });
      } else {
          mammoth
          .convertToHtml({ path: `./routes/questions/${req.file.originalname}` })
          .then(function (result) {
              //console.log(result)
              const html = result.value; // The generated HTML
              const converted = tabletojson.convert(html, {
                  useFirstRowForHeadings: false, // keys are chronological numbers
              });
              
              var reswe = converted[0];
              //console.log(reswe)
              reswe=reswe.map((json)=>{
                if(!json['0']) //if first field is empty then that question isnt considered
                return false;
                return {
                  question_level:json['0'],
                  question_type:json['1'],
                  question_level:json['2'],
                  question:json['3'],
                  answer:json['4'],
                  option1:json['5'],
                  isOption1:false,
                  option2:json['6'],
                  isOption2:false,
                  option3:json['7'],
                  isOption3:false,
                  option4:json['8'],
                  isOption4:false,
                  score:json['9'],
                  question_course:json['10'],
                  question_module:json['11'],
              }})
              reswe=reswe.slice(1);// removing heading of the table

              reswe=reswe.map((json)=>{
                var bool= false;
                for(var i=1;i<=4;i++){
                 json[`isOption${i}`]=json.answer==json[`option${i}`]; //marking correct answer as true
                 bool=bool||json[`isOption${i}`];
                }
                if(bool)
                  return json;
                else //no option is correct
                  return false
              })

              reswe=reswe.filter((json)=>json?true:false)//removing wrong and empty questions
              
              //console.log("\n\n\n\n\n\n\n Here we go\n\n\n");
              //console.log(reswe);

              //Drop the models collection, so another course can be added

              Question.create(reswe,(err,docs)=>{
                if(err)
                res.status(400).json({error:"adding questions failed"})
                else
                res.json(reswe);
                console.log(docs)
              })
                
          }).catch(err => console.log(err));
      }
  } catch (err) {
      res.status(500).send(err.message);
  }
});

module.exports = router;
