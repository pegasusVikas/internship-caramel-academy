const mongoose = require("mongoose");
const Table = require("./table.model");

const CourseSchema = new mongoose.Schema({
	title: { type: String },
	description: { type: String },
	quantity: { type: String },
	price: { type: Number },
	category: { type: String },
	subcategory: { type: String },
	subcategoryName: { type: String },
	table: [Table],
	price: { type: Number, default: 100 },
	discount: { type: Number, default: 200 },
	taughtBy: {
		type: mongoose.Schema.ObjectId,
		ref: 'Instructor',
		default: "5f05e4ce1172af181036b727"
	},
	enrolledBy: [{
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		default: ""
	}],
	embed: {
		type: String,
		default: ""
	}
});

const Course = mongoose.model("Course", CourseSchema, "All_Course");

module.exports = Course;
