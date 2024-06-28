const axios = require('axios');

exports.LogIn = (req, res) => {

    res.render('Login.ejs');
}

exports.SignUp = (req, res) => {
    axios.get("http://localhost:3000/");

    res.render('SignUp.ejs');
}

exports.Grades = (req, res) => {

    res.render('grades.ejs');
}

exports.LogOut = (req, res) => {

    res.render('Login.ejs');
}