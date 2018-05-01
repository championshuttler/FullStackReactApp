const passport = require('passport');


module.exports = app => {
  app.get(
    '/auth/google',   // authentication from passport
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'));
};