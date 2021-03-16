  const express = require('express');
  const router = express.Router();

  router.get('/:id?', function(req, res) {
      res.send("lista tag");
  });

  router.post('/', function(req, res) {
      res.send('Inclui tag');
  });

  router.put('/:id', function(req, res) {
      res.send("Edita tag");
  });

  router.delete('/:id', function(req, res) {
      res.send("Remove tag");
  });

  module.exports = router;