const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    S_No: {
        type: String,
        //required: true
    },
    List: {
        type: String,
        //required: true
    },
    Lessons_Time: {
        type: String,
        //required: true
    }
})

const TableSchema = new mongoose.Schema({
    lessons: [subSchema]
});

module.exports = TableSchema;