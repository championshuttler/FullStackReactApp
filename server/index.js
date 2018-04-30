const express = require('express'); // CommonJS module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// import express from 'express'; // for react side code
const app = express();

passport.use(new GoogleStrategy());

// app.get('/', (req, res)=>{  // whole function is route handler
//   res.send({ bye : 'buddy'});
// }); 


const PORT = process.env.PORT || 5000; // port from heroku or something else

app.listen(PORT); // localhost:5000 port to listen the app