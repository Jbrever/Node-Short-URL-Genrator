const express = require('express');
const login_router = express.Router();
const {login ,logindata} = require("../controller/logincontroller");

login_router.route('/').get(login).post(logindata);

module.exports = login_router ;