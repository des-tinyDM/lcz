require("dotenv").config();
const express = require("express");
/*
Express is a routing and middleware 
web framework that has minimal functionality 
of its own: An Express application is 
essentially a series of middleware function calls.
*/
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const massive = require("massive");
const { json } = require("body-parser");
const session = require("express-session");
const authRoute = require(`${__dirname}/routes/authRoute`);

/*
These are your top level middlewares. These middleware functions 
have no mount path. Which means the function is executed everytime the server
receives a request.

A good reference to middlewares ==>>> https://expressjs.com/en/guide/using-middleware.html
*/
app.use(json());
app.use(cors());

//connect server to database
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

//creates sessions object
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false, //only have a session if it was interacted with. Saves on storage.
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 // 1 HOUR
    }
  })
);
//other middleware...?

//---------EXPRESS ROUTES------------
app.use("/api/auth", authRoute);
//unspecified HTTP method route with a callback function, which is the middleware

app.use((req, res, next) => {
  res
    .status(404)
    .send({ message: "Where are you going? That route doesn't exist! :(" });
  //defaults to a 404 error if route does not exist
});
//---------E-------------

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
//Binds and listens for connections on specified port and host
