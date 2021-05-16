const {Router} = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const controller = require('../controller/default');
const { Usuario} = require('../models');

//LISTA
router.get('/', async (req, res) => {
    const { token } = req;
  
    const { id } = jwt.decode(token);
  
    const usuario = await controller.getById(Usuario, id);
  
    res.send(usuario);
  });
//ADICIONA
router.post('/', async (req, res) => {
    try{
        const { body } = req;
        const usuario = await controller.save(body);
        res.send(usuario);
    }catch(error){
        res.status(500).send(error);
    }
    
});

//ALTERA
router.put('/', async (req, res) => {
    try{
        const { body, token } = req;

        const { id } = jwt.decode(token);

        const usuario = await controller.edit(Usuario, body, id);
        res.send(usuario);

    }catch(error){
        res.status(500).send(error); 
    }
});

//REMOVE
router.delete('/:id?', async (req, res) => {
    try {
        const { id } = req.params;
        await controller.remove(id);
        res.send({ id });
    } catch(error){
        res.status(500).send({  error });
    }
});

module.exports = router;