  const {Router} = require('express');
  const router = Router();

  router.get('/:id?', (req, res) =>  {
      res.send("lista tag");
  });

  router.post('/', (req, res) =>  {
      res.send('Inclui tag');
  });

  router.put('/:id', (req, res) =>  {
      res.send("Edita tag");
  });

  router.delete('/:id', (req, res) =>  {
      res.send("Remove tag");
  });

 module.exports = router;