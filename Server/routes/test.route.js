const express = require("express");
const testRoutes = express.Router();
const sgMail = require('@sendgrid/mail');

let NewUser = require("../models/user/newuser.model");
let Test = require("../models/test.model");

const sendEmail = (to, subject, text) => {
	try {
	  sgMail.setApiKey('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');
	  const msg = {
		to,
		from: 'viswa.es27@gmail.com',
		subject,
		text
	};
	  sgMail.send(msg);
	} catch (err) {
	  console.log(err.message);
	}
  }

//CREATE TEST ROUTE
testRoutes.route("/create").post(function (req, res) {
	let test = new Test(req.body);
	test.save().then(() => {
	  NewUser.find({ email: req.body.user_id }, (err, docs) => {
		let doc = docs[0];
		if (err) {
		  console.log(err.message);
		  return;
		}
		if (doc !== null) {
		  let pass = doc.password;
		  Admin.find((err, admins) => {
			if (err) {
			  console.log(err.message);
			  return;
			}
			admins.map(admin => {
			  sendEmail(
				admin.emailAddress,
				'Caramel IT Academy',
				`This email is to inform you that a ${req.body.test_type} based test has been created for user ${doc.email}.`
			  );
			});
		  })
		  sendEmail(
			doc.email,
			'Caramel IT Academy',
			`You are receiving this email because you applied for a ${req.body.test_type} based test at Caramel Academy. You can login any time to take the test with your email id and this password: ${pass}`
		  );
		}
	  })
	}).catch((err) => {
	  res.status(400).send("adding new test failed");
	  console.log(err);
	});
  });
  

//GET TESTS ROUTE
testRoutes.route("/").get(function (req, res) {
  Test.find(function (err, tests) {
    if (err) {
      console.log(err);
    } else {
      const user_list=tests.map((user)=>{
        user.question_list=null; //making user question_list null because it too large,makes json transfer slow 
        return user
      })
      
      res.json(user_list);
    }
  });
});

//LOGIN TEST ROUTE
testRoutes.route("/login").post(function (req, res) {
	console.log(req.body);
	console.log("get");
	let id = req.body.userid;
	let pass = req.body.password;
	NewUser.find({ email: id }, (err, users) => {
		let user = users[0];
		if (err) {
		console.log(err.message);
		return;
		}
		if (user !== null && user.password === pass) {
		Test.find({ user_id: id }, (err, test) => {
			if (err) {
			console.log(err.message);
			return;
			} 
			if (test !== null) {
			console.log(test);
			res.status(200).send({ msg: "done", test: test[0] });
			}
		});
		} else {
		res.status(400).send({ msg: "Invalid Credentials! "});
		}
	})
});

//GET TEST ROUTE
testRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	console.log("here");
	Test.findById(id, function (err, test) {
		//console.log(test);
		if (err) {
		console.log(err);
		} else {
		res.json(test);
		}
	});
});

//UPDATE TEST ROUTE (FOR UPDATING ANSWERS GIVEN BY STUDENT AND SCORE)
testRoutes.route("/update/:id").post(function (req, res) {
	console.log("Test update Route");
	Test.findOneAndUpdate(
		{ _id: req.params.id },
		{ $set: { completed: true, score: req.body.score, question_list: req.body.questions }}, 
		{ new: true },
		(err, test) => {
			if (err) {
				console.log("Test saving error: ", err.message);
				return res.status(400).send("Update not possible");
			}
			if (!test) {
				return res.status(404).send("Test not found");
		}
		NewUser.findOneAndUpdate(
		{ email: test.user_id },
		{ $set: { completed: true, score: req.body.score }},
		{ new: true },
		(err, user => {
			if (err) {
			console.log(err.message);
			return;
			}
			try {
			sgMail.setApiKey('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');
			const msg = {
				to: user.email,
				from: 'viswa.es27@gmail.com',
				subject: 'Caramel IT Academy Skill based test',
				text: `Congrats! You have finished your test and obtained a score of ${req.body.score}!`
			};
			sgMail.send(msg);
			} catch (err) {
			console.log(err.message);
			}
			Admin.find((err, admins) => {
			if (err) {
				console.log(err.message);
				return;
			}
			admins.map(admin => {
				try {
				sgMail.setApiKey('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');
				const msg = {
					to: admin.emailAddress,
					from: 'viswa.es27@gmail.com',
					subject: 'Caramel IT Academy Skill based test',
					text: `You are receiving this email because the user ${test.user_id} completed their skill based test.`
				};
				sgMail.send(msg);
				} catch (err) {
				console.log(err.message);
				}
			});
			})
		})
	)
	res.json(test);
	});
});

module.exports = testRoutes;
