const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TableSchema = require("../models/course/table.model");
const Table = mongoose.model("Table", TableSchema);
const Course = require("../models/course/course.model");
const SubCategory = require("../models/subcategory.model");
const Category = require("../models/category.model");

//Create Course
router.route("/create").post((req, res) => {
	//Data
	console.log('hi');
	let tableDoc = "";
	Table.find((err, doc) => {
		if (err) console.log(err.message);
		console.log("table found ", doc);
		tableDoc = doc;
	});	
	var subcategory_name = "";
	SubCategory.findById({ _id: req.body.subcategoryId }, function (
		err,
		subcategory
	) {
		if (err) {
			console.log(err.message);
			return;
		} else {
			subcategory_name = subcategory.title;
			console.log(subcategory_name);
			var crs = new Course({
				title: req.body.title,
				description: req.body.description,
				category: req.body.category,
				subcategory: req.body.subcategoryId,
				subcategoryName: subcategory_name,
				price: req.body.price,
				table: tableDoc,
				embed: req.body.embed.match(/(?<=src=")([^"]*)(?=")/gim)[0]
			});
			crs.save((err, doc) => {
				if (!err) {
					console.log("Course saved in DB");
					SubCategory.findById({ _id: crs.subcategory }, function (
						err,
						subcategory
					) {
						if (err) {
							console.log(err.message);
							return;
						}
						subcategory.noOfCourses = subcategory.noOfCourses + 1;
						subcategory.courseList.push(crs._id);
						subcategory.save(() => console.log(subcategory));
						Category.findById({ _id: subcategory.catId }, function (
							err,
							catdoc
						) {
							if (err) {
								console.log("Error with updateing ");
								return;
							}
							catdoc.noOfCourses = catdoc.noOfCourses + 1;
							catdoc.save(() => console.log(catdoc));
							res.send({ message: "course created! "});
						});
					});
				} else {
					console.log(
						"Error in Course Save :" + JSON.stringify(err, undefined, 2)
					);
				}
			});
		}
	});
});

//GET COURSES
router.route("/").get((req, res) => {
	Course.find(function (err, courses) {
		if (err) {
			console.log(err);
		} else {
			res.json(courses);
		}
	});
});

// DELETE COURSE
router.route("/delete/:id").delete(function (req, res) {
	Course.findById(req.params.id, function (err, course) {
		if (!course) {
			res.status(404).send("Course not found");
		} else {
			SubCategory.findById({ _id: course.subcategory }, function (err, doc) {
				if (err) {
					console.log("Error with updateing ");
					return;
				}
				console.log(doc);
				doc.noOfCourses = doc.noOfCourses - 1;
				console.log(course._id);
				// doc.courseList.push(crs._id);
				console.log(doc.courseList);
				const index = doc.courseList.indexOf(course._id);
				if (index > -1) {
					doc.courseList.splice(index, 1);
				}
				console.log(doc.courseList);
				doc.save(() => console.log(doc));
				Category.findById({ _id: doc.catId }, function (err, catdoc) {
					if (err) {
						console.log("Error with updateing ");
						return;
					}
					catdoc.noOfCourses = catdoc.noOfCourses - 1;
					catdoc.save(() => console.log(catdoc));
				});
			});
		}
	});

	Course.findByIdAndDelete(req.params.id, function (err, course) {
		if (!course) {
			res.status(404).send("Course not found");
		} else {
			res.json("Course Deleted");
		}
	});
});
module.exports = router;
