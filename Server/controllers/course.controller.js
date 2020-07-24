const express = require("express");
const bodyParser = require("body-parser");
const Course = require("../models/course/course.model");
const Instructor = require("../models/user/instructor.model");
const User = require("../models/user/user.model");

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

module.exports.checkout = async (req, res, next) => {
	const courses = req.body.courses;
	let i = 0;
	courses.map(course => {
		Course.findById(course._id, (err, doc) => {
			if (err) {
				console.log(err.message);
				return;
			}
			doc.enrolledBy.push(req.params.userId);
			doc.save(() => console.log(doc));
			i++;
			if (i === courses.length) {
				res.status(200).json({
					message: "Done",
				});
			}
		});
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
	let courses = [];
	Course.find().then((docs) => {
		docs.map(doc => {
			let id = doc.taughtBy;
			Instructor.findById(id, (err, instructor) => {
				let students = [];
				if (err) {
					console.log("Fetch Instructor error - ", err.message);
					return;
				}
				let users = doc.enrolledBy;
				let length = users.length;
				users.length > 0 && users.map(user => {
					User.findById(user._id, (err, userDoc) => {
						if (err) {
							console.log("Fetch student error -", err.message);
							return;
						}
						if (userDoc === null) length -= 1;
						userDoc !== null && students.push({
							name: userDoc.firstName + " " + userDoc.lastName,
							email: userDoc.emailAddress,
							course: doc.title
						});
						if(students.length === length) {
							courses.push({
								...doc._doc,
							    instructor: instructor !== null ? {
									name: instructor.firstName + " " + instructor.lastName,
									email: instructor.emailAddress
								} : null,
								students 
							});
							if (courses.length === docs.length) {
								return res.status(200).json({
									message: "Courses fetched successfully",
									courses
								});
							}	
						}
					});
				});
				users.length === 0 && courses.push({
					...doc._doc,
					instructor: instructor !== null ? {
						name: instructor.firstName + " " + instructor.lastName,
						email: instructor.emailAddress
					} : null,
					students: []
				});
				if (courses.length === docs.length) {
					return res.status(200).json({
						message: "Courses fetched successfully",
						courses
					});
				}	
			});
		});
	});
};
