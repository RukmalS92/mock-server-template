const mongoose = require('mongoose')
const { Schema, Model } = require('mongoose')

const db = mongoose.connection; //accessing mongoose defualt connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection success')
});

const userSchema = new Schema({
    username : String,
    email : String,
    password : String
})

const User = mongoose.model['User'] ? mongoose.model('User') : mongoose.model('User', userSchema, 'User');

module.exports = {User}