const sequealize = require('sequelize');
const conection = require("../database/database");

const Users = conection.define('users', {
    id: {
        type: sequealize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequealize.STRING,
        allowNull: false
    },
    senha: {
        type: sequealize.STRING,
        allowNull: false

    }
});

Users.sync()
     

module.exports = Users;