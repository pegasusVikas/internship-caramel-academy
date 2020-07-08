const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    subCategory: { type: String, required: true },
    price: {type: String, default: ""},
    modules: [{ type: String }],
    taughtBy: { type: String, default: "" },
    enrolledBy: [{
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        default: ""
    }]
});

module.exports = mongoose.model('Course', courseSchema);
