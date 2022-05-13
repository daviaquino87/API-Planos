const express = require('express');
const login = express.Router();



login.route('/')
    .get((req, res) => {
        res.statusCode = 200;
        res.render("login");
    })



module.exports = login;
