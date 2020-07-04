MERN Caramel IT

1. After downloading the files.Open them in VS code.

2. Run "npm install" command on terminals of both web and Server to add node modules folder to the folder.

3. Run"nodemon Server" command on th terminal of Server folder to get the server running.

4. Run"npm start" command on th terminal of frontend folder to start the dovelopment server.

5. The database is connected to the Mongo Atlas using the following code in dbconnect.js

mongoose.connect(
  "mongodb+srv://caramel_it:Admin123%23@projectz-gjuxk.mongodb.net/MERN_stack?authSource=admin&replicaSet=ProjectZ-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  {
    useNewUrlParser: true,
  }
);

6. To make the database local,replace the above code with:

mongoose.connect("mongodb://127.0.0.1:27017/MERN", {
  useNewUrlParser: true,
});