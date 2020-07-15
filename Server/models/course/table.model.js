const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    lessons: [{
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
    }]
});

module.exports = TableSchema;