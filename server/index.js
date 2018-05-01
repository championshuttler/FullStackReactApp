const express = require('express'); // CommonJS module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// import express from 'express'; // for react side code
const app = express();

passport.use(
  new GoogleStrategy(    // google strategy
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile,done) => {
      console.log('access token: ',accessToken);
      console.log('refresh token: ',refreshToken);
      console.log('profile: ',profile);
    }
  )
);

app.get(
  '/auth/google',   // authentication from passport
  passport.authenticate('google',{
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', 
    passport.authenticate('google'));


// app.get('/', (req, res)=>{  // whole function is route handler
//   res.send({ bye : 'buddy'});
// }); 


const PORT = process.env.PORT || 5000; // port from heroku or something else

app.listen(PORT); // localhost:5000 port to listen the app