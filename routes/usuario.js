const {Router} = require('express');
const router = Router();
const controller = require('../controller/usuario');
const database = require('../models');

router.get('/:id?', function(req, res) {
    res.send({})
});

router.post('/', (req, res) => {
    res.send('Inclui usuário');
});

router.put('/:id?', (req, res) => {
    res.send('Editar um usuário');
});

router.delete('/:id?', (req, res) => {
    res.send('Remover um usuário');
});

module.exports = router;