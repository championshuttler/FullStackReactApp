const mongoose = require('mongoose');
// const Schema = mongoose.Schema; //  CommonJS way
const { Schema } = mongoose;    // ES6 way 

const userSchema = new Schema({
    googleId: String
    // We can add more properties from user id of google
});

mongoose.model('users', userSchema);