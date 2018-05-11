const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');


// used to serialize the user for the session
passport.serializeUser((user, done) => {  // to generate identifying piece to save in session 
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
  user.findById(id).then(user => {
    done(null, user)
  });
});

passport.use(
  new GoogleStrategy(    // google strategy
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {

      user.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // We dont need to add id to database again
            done(null, existingUser);
          } else {
            // Create record into database
            new user({ googleId: profile.id }).save() // save to save data to mongoDB
              .save()
              .then(user => done(null, user));
          }
        })


    }
  )
);
