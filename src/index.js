const express = require("express");
const app = express();
const { register, login } = require("./controller/singInAndSingup");
require("dotenv").config();
var jwt = require("jsonwebtoken");

// connect middleware
const cors = require("cors");

const passport = require("./config/google.outh");

app.use(express.json());

app.use(cors());

app.post("/register", register);
app.post("/login", login);

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile',"email"] }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login',session:false}),
//   function(req, res) {
//     userdata = req.user
//     var token = jwt.sign({ userdata }, process.env.key);

//     return res.status(200).send({user:req.user,token:token})
//   });

module.exports = app;
