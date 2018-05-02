const express = require('express'); // CommonJS module
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

// import express from 'express'; // for react side code

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app);



// app.get('/', (req, res)=>{  // whole function is route handler
//   res.send({ bye : 'buddy'});
// }); 


const PORT = process.env.PORT || 5000; // port from heroku or something else

app.listen(PORT); // localhost:5000 port to listen the app