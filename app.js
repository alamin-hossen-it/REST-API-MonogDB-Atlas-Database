const express = require("express");
const cors = require("cors");
require("./config/db")
const userRouter = require("./routes/user.route");


const app = express();



//use cors middleware for accessing from another port from U/I
  app.use(cors());

  //Use for reciveing form data from clint side U/I
  app.use(express.urlencoded({extended: true}));

  //Use for reciveing json type data from clint side U/I
  app.use(express.json());

  app.use("/api/users", userRouter)


  //api/users : GET
  //api/users/:id : GET
  //api/users/ : POST
  //api/users/:id : PATCH
  //api/users/:id : DELETE

  app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/./views/index.html")
  });


  //Route not found error 
  app.use((req, res, next)=>{
    res.status(404).json({message: "Route not found"})
  });


  //Server error handling
  app.use((err, req, res, next)=>{
    res.status(500).json({message: "Server is down please try again after sometime"})
  })


module.exports = app;