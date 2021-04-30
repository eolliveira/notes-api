  const {Router} = require('express');
  const router = Router();
  const controller = require('../controller/tag');
  const tagController = require('../controller/tag');

  router.get('/:usuarioId', async (req, res) =>  {
    const { usuarioId } = req.params;
    const tags = await tagController.getByUsuarioId(usuarioId);
    res.send(tags || []); 
  });

  // router.post('/', async (req, res) =>  {
  //   try{
  //       const { body } = req;
  //       const tag = await controller.save(body);
  //       res.send(tag);
  //   }catch(error){
  //       res.status(500).send(error);
  //   }
  // });

  // router.put('/:id', async (req, res) =>  {
  //   try{
  //       const { body } = req;
  //       const { id } = req.params;
  //       const tag = await controller.edit(id, body);
  //       res.send(tag);
  
  //   }catch(error){
  //       res.status(500).send(error); 
  //   }
  // });

  router.delete('/:notaId/:id', async (req, res) =>  {
    try {
        const { notaId, id } = req.params;
        await tagController.remove( notaId, id);
        res.send({ id });
    } catch(error){
      console.log(error);
        res.status(500).send({  error });
    }
  });

 module.exports = router;