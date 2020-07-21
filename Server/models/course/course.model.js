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
	taughtBy: {
		type: mongoose.Schema.ObjectId,
		ref: 'Instructor',
		default: "5ef0b129030c551c709ce740"
	},
	enrolledBy: [{
		type: mongoose.Schema.ObjectId,
		ref: 'user',
		default: ""
	}],
	embed: {
		type: String,
		default: ""
	}
});

const Course = mongoose.model("Course", CourseSchema, "All_Course");

module.exports = Course;
