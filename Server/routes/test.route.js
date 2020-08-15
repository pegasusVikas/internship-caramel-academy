const express = require("express");
const testRoutes = express.Router();
const sgMail = require('@sendgrid/mail');

let NewUser = require("../models/user/newuser.model");
let Test = require("../models/test.model");
let Admin = require("../models/user/admin.model");
const { findOne } = require("../models/user/admin.model");

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
	  NewUser.find({ email: req.body.user_id,type:req.body.test_type,emailSent:false }, (err, docs) => {
		let doc = docs[0];
		console.log(docs)
		if (err) {
		  console.log(err.message);
		  res.status(400).send("DB error NewUser");
		}
		else if (doc) {
		  let pass = doc.password;
		  Admin.find((err, admins) => {
			if (err) {
			  console.log(err.message);
			  res.status.send("DB error Admin")
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
		  doc.emailSent=true;
		  doc.save()

		  let test = new Test(req.body);
		  test.save().then(() => {
			console.log("responded")
			res.json({message:"test generated",email:doc.email,type:doc.type})
		  }).catch((err) => {
			res.status(400).send("adding new test failed");
			console.log(err);
		  });
		} else{
			console.log("user not present in the applied list or  user was already assigned to a test");
			res.status(400).send("adding new test failed, user not present in the applied list or  user was already assigned to a test");
		}
	  })
	
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
testRoutes.route("/skill/login").post(function (req, res) {
	console.log(req.body);
	console.log("get");
	let id = req.body.userid;
	let pass = req.body.password;
	NewUser.find({ email: id,password:pass,type:"skill" }, (err, users) => {
	  let user = users[0];
	  if (err) {
		console.log(err.message);
		return;
	  }
	  if (user !== null) {
		Test.find({ user_id: id,test_type:"skill" }, (err, test) => {
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
  
  testRoutes.route("/course/login").post(function (req, res) {
	console.log(req.body);
	console.log("get");
	let id = req.body.userid;
	let pass = req.body.password;
	NewUser.find({ email: id,password:pass,type:"course" }, (err, users) => {
	  let user = users[0];
	  if (err) {
		console.log(err.message);
		return;
	  }
	  if (user !== null) {
		Test.find({ user_id: id,test_type:"course" }, (err, test) => {
		  if (err) {
			console.log(err.message);
			return;
		  } 
		  if (test !== null) {
			console.log(test);
			res.status(200).send({ msg: "done", test: test[0] });
		  }else {
			res.status(404).send({ msg: "Test not found "});
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
		{ email: test.user_id,type:test.test_type,completed:false },
		{ completed: true, score: req.body.score,emailSent:true },
		{ new:true },
		(err, user) => {
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
			sgMail.send(msg)
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
		res.json(test);
		})
	
	});


module.exports = testRoutes;
