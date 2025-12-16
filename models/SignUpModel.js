const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : String, 
    lastName : String,
    email : String,
    phone : Number,
    password : String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);