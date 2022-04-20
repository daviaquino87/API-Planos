const sequealize = require("sequelize");
const conection = new sequealize('ApiPlanos','root','',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = conection;