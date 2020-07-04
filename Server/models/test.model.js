const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Test = new Schema({
  question_list: {
    type: Object,
  },
  user_id: {
    type: String,
  },
  test_type: {
    type: String,
  },
  total_score: {
    type: Number,
  },
  //   start_time:{
  //       type:
  //   },
  //   end_time:{
  //       type:
  //   },
  test_started: {
    type: Boolean,
  },
  test_completed: {
    type: Boolean,
  },
  marks_scored: {
    type: Number,
  },
});

module.exports = mongoose.model("Test", Test);
