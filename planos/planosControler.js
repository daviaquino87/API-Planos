const express = require('express');
const router = express.Router();
const Plano = require("../planos/planos")


////////////////////////////////////////////////
router.get("/planos", (req,res)=>{
    Plano.findAll().then(planos => {
        res.render("index", {Planos: planos})
    })
});
////////////////////////////////////////////////

////////////////////////////////////////////////
router.route('/planos/cadastro')
    //ROTA GET PARA LISTAR OS PLANOS
    .get((req, res) => {
        res.statusCode = 200;
        res.render("planos");
    })
////////////////////////////////////////////////

////////////////////////////////////////////////
router.route('/plano')
    //ROTA POST PARA CRIAR NOVO PLANO
    .post((req, res) => {
        var {
            id,
            name,
            preco
        } = req.body;

        Plano.create({
            id: id,
            nome: name,
            preco: preco,
    
        }).then(() => {
            res.redirect("/planos")
        })
    })
////////////////////////////////////////////////


////////////////////////////////////////////////
//ROTA GET QUE BUSCA O FILME PELO ID
router.route('/planos/:id')
    .get((req, res) => {
    var id = req.params.id

    Plano.findByPk(id).then(plano=> {
        if(plano != undefined ){
            console.log(plano)
                res.render("edit" , {planos: plano})
        }else{
            res.sendStatus(400)
        }
    }).catch(err => {
        res.sendStatus(404)

    })
})
    //ROTA PUT PARA ATUALIZAR FILME
    .post((req, res) => {
        var {
            id,
            name,
            preco
        } = req.body;
    
        Plano.update({nome: name, preco: preco},{
            where:{
                id:id
            }
        }).then(() =>{
            res.redirect("/planos")
        })
    
    })
////////////////////////////////////////////////




module.exports = router;