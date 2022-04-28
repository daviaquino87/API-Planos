const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database.js");
const planosController = require("./planos/planosControler");
const planoModel = require("./planos/planos");



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/", planosController);
app.set('view engine', 'ejs');


//database connection verification
connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso");
}).catch((error) => {
    console.log(error);
});

app.listen(3000, () => {
    console.log('server on');
});