const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//variavel com os planos (sera substituida por um banco de dados)
var DB = {
    planos: [
        {
            id:1,
            name: "500MB",
            preco: 99.99
        },
         {
            id:2,
            name: "100MB",
            preco: 75.00
        },
        {
           id:3,
           name: "200MB",
           preco: 80.00
       }
    ]
    
};

////////////////////////////////////////////////
app.route('/planos')
//ROTA GET PARA LISTAR OS PLANOS
.get((req, res) => {
    res.statusCode = 200;
    res.json(DB.planos)
})
////////////////////////////////////////////////


////////////////////////////////////////////////
app.route('/plano')
//ROTA POST PARA CRIAR NOVO PLANO
.post((req, res) => {
    var {id,name,preco} = req.body;

    DB.planos.push({
        id,
        name,
        preco
    });

    res.sendStatus(200)
})
////////////////////////////////////////////////


////////////////////////////////////////////////
app.route('/plano/:id')
//ROTA GET QUE BUSCA O FILME PELO ID
.get((req, res) => {
    if(isNaN(req.params.id )){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var plano = DB.planos.find(p => p.id == id);

        if(plano != undefined){
            res.statusCode = 200;
            res.json(plano);
        }else{
            res.sendStatus(404);
        }
    }
})
//ROTA DELETE PARA DELETAR OS FILMES PELO ID
.delete((req, res) => {
    if(isNaN(req.params.id )){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.planos.findIndex(p => p.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.planos.splice(index,1);
            res.sendStatus(200);
        }
    }
})
//ROTA PUT PARA ATUALIZAR FILME
.put((req,res) => {
    if(isNaN(req.params.id )){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var plano = DB.planos.find(p => p.id == id);

        if(plano != undefined){
             var {name,preco} = req.body;

             if(name != undefined){
                 plano.name = name;
             }
             if(preco != undefined){
                 plano.preco = preco;
             }
             res.sendStatus(200)
        }else{
            res.sendStatus(404);
        }
    }
})
////////////////////////////////////////////////

app.listen(3000, () => {
    console.log('server on');
});
