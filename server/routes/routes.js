const express = require('express');

const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

route.get('/', services.LogIn);
route.get('/SignUp', services.SignUp);
route.get('/grades', services.Grades);
route.get('/', services.LogOut);


//API

route.post('/api/users', controller.create);
route.post('/api/login', controller.login);

module.exports = route;