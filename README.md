# internship-caramel-academy
To run the site on localhost, we need to install the required dependencies first for the client and the server.
Run the following commands from the root directory to install the dependencies:
1. cd Server
2. npm install
3. cd..
4. cd web
5. npm install

To start the app, open the terminal in the Server directory and run the command: 
nodemon app.js
This will start the backend server and establish a connection with the mongodb cluster.

Then, in the web directory, open the terminal and run the command:
npm start
This will start the react app and will open it up on your browser automatically.

For changing backend and database configuration go to file config.json by pressing ctrl+click on the link below:(or go the respective path)
 [configuration](Server/config/config.json)
.
------------------------------------------------------
NOTE: This Server is connected to question bank app.
      If you want to access its content then you have
      to run question bank app also.
------------------------------------------------------
