const {Router} = require('express');
  const router = Router();

  router.get('/:id?', (req, res) => {
      res.send("Lista nota");
  });

  router.post('/', (req, res) => {
      res.send('Inclui nota');
  });

  router.put('/:id', (req, res) => {
      res.send("Altera Nota");
  });

  router.delete('/:id', (req, res) => {
      res.send("Remove Nota");
  });

  module.exports = router;