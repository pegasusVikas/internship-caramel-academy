const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Question = new Schema({
  question_course: {
    type: String,
  },
  question_module: {
    type: String,
  },
  question_topic: {
    type: String,
  },
  question_level: {
    type: String,
  },
  question_type: {
    type: String,
  },
  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  },
  option4: {
    type: String,
  },
  isOption1: {
    type: Boolean,
  },
  isOption2: {
    type: Boolean,
  },
  isOption3: {
    type: Boolean,
  },
  isOption4: {
    type: Boolean,
  },
  time: {
    type: String,
  },
  score: {
    type: Number,
  },
});

module.exports = mongoose.model("Question", Question);
