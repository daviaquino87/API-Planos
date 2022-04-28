const sequealize = require('sequelize');
const conection = require("../database/database");

const Plano = conection.define('planos', {
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
    preco: {
        type: sequealize.FLOAT,
        allowNull: false

    }
});

//   Plano.sync({force:true}).then(() => {
//      console.log("tabela criada");
//  })

module.exports = Plano;