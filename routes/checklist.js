const {Router} = require('express');
  const router = Router();

router.get('/:id?', (req, res) =>  {
    res.send('Inclui checklist');
});

router.put('/:id', (req, res)  => {
    res.send('Altera checklist');
});

router.delete('/:id', (req, res)  => {
    res.send('Remove checklist');
});

module.exports = router;