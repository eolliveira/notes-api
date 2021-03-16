const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json([{ nome: `Erick`, email: `erick@gmail.com` }]);
});

router.post('/', (req, res) => {
    res.send('Inclui usuário');
});

router.put('/:id?', (req, res) => {
    res.send('Editar um usuário');
});

router.delete('/usuario', (req, res) => {
    res.send('Remover um usuário');
});

module.exports = router