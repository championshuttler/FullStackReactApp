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

    //router for logout 
  app.get('/api/logout', (req, res) => { 
    req.logout();
    res.send(req.user);
  });
  // router for getting id from mongodb database
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};