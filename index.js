const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database.js");
const planosController = require("./controllers/planosControler");
const loginController = require("./controllers/loginController");
const planoModel = require("./models/Planos");



app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/", loginController,planosController);
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