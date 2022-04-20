const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const planosController = require("./controllers/planos/planosControler");



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use("/", planosController);
app.set('view engine', 'ejs');



////////////////////////////////////////////////
app.route('/')
    //ROTA INICIAL
    .get((req, res) => {
        res.statusCode = 200;
        res.render("login");
    })
////////////////////////////////////////////////


app.listen(3000, () => {
    console.log('server on');
});