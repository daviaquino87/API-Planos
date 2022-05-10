const express = require('express');
const router = express.Router();
const Plano = require("../models/Planos")






router.get("/planos", (req, res) => {
    Plano.findAll().then(planos => {
        res.render("index", {
            Planos: planos
        })
    })
});

router.route('/planos/cadastro')
    .get((req, res) => {
        res.statusCode = 200;
        res.render("admin/planos");
    })

router.route('/plano/save')
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

router.route('/planos/edit/:id')
    .get((req, res) => {
        var id = req.params.id

        Plano.findByPk(id).then(plano => {
            if (plano != undefined) {
                res.render("admin/edit", {
                    planos: plano
                })
            } else {
                res.sendStatus(400)
            }
        }).catch(err => {
            res.sendStatus(404)

        })
    })

router.route('/plano/update')
    .post((req, res) => {
        var {
            id,
            name,
            preco
        } = req.body;


        Plano.update({
            nome: name,
            preco: preco
        }, {
            where: {
                id: id
            }
        }).then(() => {
            res.redirect("/planos")
        })

    })
router.post("/planos/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Plano.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/planos");
            })
        } else { //NÃO FOR UM NUMERO
            res.redirect("/planos");
        }
    } else { //NULL
        res.redirect("/planos");
    }
})

module.exports = router;