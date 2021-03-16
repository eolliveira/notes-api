  const express = require('express');
  const router = express.Router();

  router.get('/:id?', function(req, res) {
      res.send("Lista nota");
  });

  router.post('/', function(req, res) {
      res.send('Inclui nota');
  });

  router.put('/:id', function(req, res) {
      res.send("Altera Nota");
  });

  router.delete('/:id', function(req, res) {
      res.send("Remove Nota");
  });

  module.exports = router;