//requisicoes http
const express = require('express');

//importa o model User 
const Deliveries = require('../models/Deliveries');

//controle de rotas
const router = express.Router();

router.get('/',(req,res)=>{
    res.send({msg:'ok',user:req.userId});
});
router.get('/deliveries', async(req,res)=>{
   
    try{
        //procura todos usuarios
        const deliveries = await Deliveries.find({});

        res.status(200).send(deliveries);
    }catch(err){
        res.status(400).send({error:"falha ao listar deliveries"});

    }
})
router.delete('/deliveries',(req,res)=>{
    try{
        //procura todos usuarios
        // const deliveries = await Deliveries.find({});

        res.status(200).send(deliveries);
    }catch(err){
        res.status(400).send({error:"falha ao deletar deliveries"});

    }
})
router.post('/deliveries',async (req,res)=>{
    const { msg } = req.body;
    console.log(msg,req.params.id,req.userId);
    try{
        const mensagem = await Deliveries.create({
            mensagem:msg,
            destinatario:req.params.id,
            remetente: req.userId
        });
        res.status(200).send({msg:mensagem});

    }catch(err){
        res.status(400).send({error:`Falha ao salvar deliveries ${err}`})
    }
})

module.exports = app => app.use('/',router);