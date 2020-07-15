const express = require("express");
const bodyParser = require("body-parser");
const Course = require("../models/course/course.model");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports.delete = (req, res, next) => {
	console.log("ID = " + req.params.id);
	Course.deleteOne({ _id: req.params.id }).then((result) => {
		console.log("Delete");
	});
	res.status(201).json({ message: "Course deleted" });
};

module.exports.update = (req, res, next) => {
	const course = new Course({
		title: req.body.title,
		description: req.body.description,
	});
	Course.updateOne({ _id: req.params.id }, course).then((result) => {
		console.log(result);
		res.status(200).json({
			message: "Updated successfully",
		});
	});
};

module.exports.enrol = async (req, res, next) => {
	const doc = await Course.findOne({ _id: req.params.courseId }).exec();
	doc.enrolledBy.push(req.params.userId);
	doc.save(() => console.log(doc));
	res.status(200).json({
		message: "Done",
	});
};

module.exports.teach = async (req, res, next) => {
	const doc = await Course.findOne({ _id: req.params.courseId }).exec();
	doc.taughtBy = req.params.userId;
	doc.save(() => console.log(doc));
	res.status(200).json({
		message: "Done",
	});
};


module.exports.read = (req, res, next) => {
	Course.find().then((docs) => {
		console.log("response");
		console.log("Hello" + docs);
		res.status(200).json({
			message: "Categories fetched successfully",
			courses: docs,
		});
	});
};
