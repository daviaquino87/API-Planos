require('dotenv').config()
const sequealize = require("sequelize");
const conection = new sequealize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    timezone: process.env.DB_TIME_ZONE
});

module.exports = conection;