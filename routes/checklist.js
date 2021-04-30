const {Router} = require('express');
const router = Router();
const checklistController = require('../controller/checklist');

router.get('/:usuarioId', async (req, res) =>  {
    const { usuarioId } = req.params;
    const checklists = await checklistController.getByUsuarioId(usuarioId);
    res.send(checklists || []);
});

// router.post('/', async (req, res)  => {
//     try{
//         const { body } = req;
//         const checklist = await controller.save(body);
//         res.send(checklist);
//     }catch(error){
//         res.status(500).send(error);
//     }
// });

// router.put('/:id?', async (req, res)  => {
//     try{
//         const { body } = req;
//         const { id } = req.params;
  
//         const checklist = await controller.edit(id, body);
//         res.send(checklist);
  
//     }catch(error){
//         res.status(500).send(error); 
//     }
// });

router.delete('/:notaId/:id', async (req, res)  => {
    try {
        const { notaId, id } = req.params;
        await checklistController.remove(notaId, id);
        res.send({ id });
    } catch(error){
        res.status(500).send({ error });
    }
});

module.exports = router;