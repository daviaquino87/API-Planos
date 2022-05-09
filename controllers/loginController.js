const express = require('express');
const login = express.Router();
const planosController = require("./planosControler");


login.route('/')
    .get((req, res) => {
        res.statusCode = 200;
        res.render("login");
    })

module.exports = login;
