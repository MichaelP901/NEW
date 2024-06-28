// const name = require('ejs');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
});

const Userdb = mongoose.model('Userdb', schema);

module.exports = Userdb;