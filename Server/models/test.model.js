const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Test = new Schema({
  question_list: {
    type: Array,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  test_type: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  total_score: {
    type: Number,
    required: true
  },
  score: {
    type: Number, 
    default: -1
  }
},{timestamps:true});

module.exports = mongoose.model("Test", Test);
