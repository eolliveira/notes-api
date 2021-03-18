const {Router} = require('express');
const router = Router();
const controller = require('../controller/usuario');

//LISTA
router.get('/:id?', async (req, res) => {
    const { id } = req.params;
    const usuarios = await controller.getUsuarios(id);
    res.send(usuarios);
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
router.put('/:id?', async (req, res) => {
    try{
        const { body } = req;
        const { id } = req.params;

        const usuario = await controller.edit(id, body);
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