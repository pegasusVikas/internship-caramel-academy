const jwtHelper = require('../config/jwtHelper');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const TableSchema = require("../models/course/table.model");
const lsn = require("../data/table.json");
const mongoose = require('mongoose');
const Table = mongoose.model("Table", TableSchema);
var mammoth = require("mammoth");
const { Tabletojson: tabletojson } = require("tabletojson");
const fs = require("fs");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        console.log(__dirname)
        cb(null, path.resolve(__dirname, "./uploads/"))
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.originalname )
    }
});

//Configure multer
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log('FILEFILTTER ROUTE UPLOAD LESSON');
        // allow doc only
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Only doc are allowed.'), false);
        }
        cb(null, true);
    }
});



const ctrlUser = require('../controllers/user.controller');
const ctrlStudent = require('../controllers/student.controller');
const ctrlCorporate = require('../controllers/corporate.controller');
const ctrlInstructor = require('../controllers/instructor.controller');
const ctrlUniversity = require('../controllers/university.controller');
const ctrlAdmin = require('../controllers/admin.controller');
const ctrlCategory = require('../controllers/category.controller');
const ctrlSubCat = require('../controllers/subcategory.controller');
const ctrlCourse = require('../controllers/course.controller');

//Register
router.post('/user-register', ctrlUser.register);
router.post('/student-register', ctrlStudent.register);
router.post('/corporate-register', ctrlCorporate.register);
router.post('/instructor-register', ctrlInstructor.register);
router.post('/university-register', ctrlUniversity.register);
router.post('/admin-register', ctrlAdmin.register);

//Login
router.post('/user-authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/student-authenticate', ctrlStudent.authenticate);
router.get('/studentProfile', jwtHelper.verifyJwtToken, ctrlStudent.studentProfile);

router.post('/instructor-authenticate', ctrlInstructor.authenticate);
router.get('/instructorProfile', jwtHelper.verifyJwtToken, ctrlInstructor.instructorProfile);

router.post('/corporate-authenticate', ctrlCorporate.authenticate);
router.get('/corporateProfile', jwtHelper.verifyJwtToken, ctrlCorporate.corporateProfile);

router.post('/university-authenticate', ctrlUniversity.authenticate);
router.get('/universityProfile', jwtHelper.verifyJwtToken, ctrlUniversity.universityProfile);

router.post('/admin-authenticate', ctrlAdmin.authenticate);
router.get('/adminProfile', jwtHelper.verifyJwtToken, ctrlAdmin.adminProfile);

router.post('/admin-authenticate', ctrlAdmin.authenticate);
router.get('/adminProfile', jwtHelper.verifyJwtToken, ctrlAdmin.adminProfile);


//Reset User password
router.post('/user-req-reset-password', ctrlUser.ResetPassword);
router.post('/user-new-password', ctrlUser.NewPassword);
router.post('/user-valid-password-token', ctrlUser.ValidPasswordToken);

//Reset Student password
router.post('/student-req-reset-password', ctrlStudent.ResetPassword);
router.post('/student-new-password', ctrlStudent.NewPassword);
router.post('/student-valid-password-token', ctrlStudent.ValidPasswordToken);

//Reset Instructor password
router.post('/instructor-req-reset-password', ctrlInstructor.ResetPassword);
router.post('/instructor-new-password', ctrlInstructor.NewPassword);
router.post('/instructor-valid-password-token', ctrlInstructor.ValidPasswordToken);

//Reset Corporate password
router.post('/corporate-req-reset-password', ctrlCorporate.ResetPassword);
router.post('/corporate-new-password', ctrlCorporate.NewPassword);
router.post('/corporate-valid-password-token', ctrlCorporate.ValidPasswordToken);

//Reset University password
router.post('/university-req-reset-password', ctrlUniversity.ResetPassword);
router.post('/university-new-password', ctrlUniversity.NewPassword);
router.post('/university-valid-password-token', ctrlUniversity.ValidPasswordToken);

//Reset Admin password
router.post('/admin-req-reset-password', ctrlAdmin.ResetPassword);
router.post('/admin-new-password', ctrlAdmin.NewPassword);
router.post('/admin-valid-password-token', ctrlAdmin.ValidPasswordToken);

//Category Routes
router.post('/categories', ctrlCategory.create);
router.get('/categories', ctrlCategory.getResult);
router.put('/categories/:id', ctrlCategory.update);
router.delete('/categories/:id', ctrlCategory.delete);

//subcategory Routes
router.post('/subcategories', ctrlSubCat.create);
router.get('/subcategories', ctrlSubCat.read);
router.put('/subcategories/:id', ctrlSubCat.update);
router.delete('/subcategories/:id', ctrlSubCat.delete);

//Course Routes
router.get('/courses', ctrlCourse.read);
router.put('/courses/:id', ctrlCourse.update);
router.delete('/courses/:id', ctrlCourse.delete);
router.post('/courses/user/:userId', ctrlCourse.checkout);
router.post('/courses/instructor/:userId/:courseId', ctrlCourse.teach);

// List routes
router.get('/instructors', ctrlInstructor.list);
router.get('/users', ctrlUser.list);
router.get('/universities', ctrlUniversity.list);
router.get('/organizations', ctrlCorporate.list);

router.post('/upload/table', upload.single('upload'), (req, res) => {
    console.log("req.file = ", req.file);
    console.log("req.body = ", req.body);
    try {
        const lesson = req.file;
        if (!lesson) {
            console.log("shet");
            return res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            mammoth
            .convertToHtml({ path: `./routes/uploads/${req.file.originalname}` })
            .then(function (result) {
                //console.log(result)
                const html = result.value; // The generated HTML
                const converted = tabletojson.convert(html, {
                    useFirstRowForHeadings: false,
                });
                var reswe = converted[0];
                //console.log(reswe)
                reswe=reswe.map((json)=>{return {
                    S_No:json['0'],
                    List:json['1'],
                    Lessons_Time:json['2']
                }})
                reswe=reswe.slice(1);
                console.log(reswe)
                //Drop the models collection, so another course can be added
            
                mongoose.connection.collections["tables"].drop().then(() => {
                    console.log("collection dropped");           
                }).catch(err => console.log(err.message));
                const table = new Table({
                    lessons: reswe
                });
                table.save((err, doc) => {
                    if (err) console.log(err.message);
                    else {
                        console.log("table uploaded to db");
                        res.status(200).json(doc);
                    }
                })
            }).catch(err => console.log(err.message));
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;