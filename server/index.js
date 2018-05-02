const express = require('express'); // CommonJS module
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');         // changed the sequence due to error "Schema hasn't been registered for model "users"."
require('./services/passport');


// import express from 'express'; // for react side code

mongoose.connect(keys.mongoURI);   // connect to mongoDB with mongoose
const app = express();

require('./routes/authRoutes')(app);



// app.get('/', (req, res)=>{  // whole function is route handler
//   res.send({ bye : 'buddy'});
// }); 


const PORT = process.env.PORT || 5000; // port from heroku or something else

app.listen(PORT); // localhost:5000 port to listen the app