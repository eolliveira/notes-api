const {Router} = require('express');
const router = Router();
const controllerUsuario = require('../controller/usuario');

router.post('/', async (req, res) => {
    try{
        const { body } = req;
        const usuario = await controllerUsuario.save(body);
        res.send(usuario);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
    
});

module.exports = router;