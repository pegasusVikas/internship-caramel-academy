const mongoose = require("mongoose");
//const url = "mongodb://localhost:27017/caramelitacademy";
// const url =
//   "mongodb+srv://caramel_mern:Welcome%40123@projectz-gjuxk.mongodb.net/test?retryWrites=true&w=majority";
//mongodb+srv://<username>:<password>@projectz-gjuxk.mongodb.net/<dbname>?retryWrites=true&w=majority
const url =
  //"mongodb+srv://caramel_mern:Admin@123@projectz-gjuxk.mongodb.net/MERN_stack?authSource=admin&replicaSet=ProjectZ-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
  "mongodb+srv://caramel_mern:Welcome%40123@projectz-gjuxk.mongodb.net/MERN_stack?retryWrites=true&w=majority";
  const connect = mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false ,useCreateIndex:true})
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

module.exports = connect;
