const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const PORT = require("./config");
const app = express();
//app.use(express.static(path.join(__dirname, "uploads")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, DELETE, POST, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

require("./config/config");
const studRoutes = require("./routes/index.router");
const courseRoute = require("./routes/course.route");
//Passport
require("./config/passport");
//Mongo Connect
const connect = require("./dbconnect");

const studCart = require("./routes/studentcart.router");

//Body Parser, Cors, Cookie parser
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Passport Middleware
app.use(passport.initialize());

//Route
// app.use('/upload', require('./routes/upload.route'))
app.use("/api", studRoutes);
//app.use("/api/module", moduleRoute);

// app.use('/course', require('./routes/upload'));
// app.use('/api', require('./routes/upload'));
// app.use('/course', require('./routes/seed'));

//UPLOAD MODULE ROUTES
app.use("/api/module", require("./routes/upload.route"));
app.use("/course", require("./routes/course.route"));

//QUESTION BANK ROUTES
app.use("/questions", require("./routes/question.route"));
app.use("/test", require("./routes/test.route"));
app.use("/skilltest", require("./routes/skilltest.route"));
app.use("/coursetest", require("./routes/coursetest.route"));

//NEW USER ROUTES
app.use("/newuser", require("./routes/newuser.route"));

//Cart
app.use("/api/studcart", studCart);

// error handler
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) =>
      valErrors.push(err.errors[key].message)
    );
    res.status(422).send(valErrors);
  }
});

app.listen(PORT, () => console.log(`Server started at port : ${PORT}`));
