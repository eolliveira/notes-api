const express = require('express');
const router = express.Router();

router.get('/:id?', function(req, res) {
    res.send('busca checklist');
});

router.post('/', function(req, res) {
    res.send('Inclui checklist');
});

router.put('/:id', function(req, res) {
    res.send('Altera checklist');
});

router.delete('/:id', function(req, res) {
    res.send('Remove checklist');
});

module.exports = router;