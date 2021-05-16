const { Checklist, Nota } = require('../models');
const checklist = require('../models/checklist');
const nota = require('../models/nota');
const controller = {};

controller.getChecklist = async (id = null) => {
    let result = [];
    if(id){
       result = await Checklist.findByPk(id);
    } else {
       result = await Checklist.findAll();
    }

    return result;
};

controller.save = async (checklist) => {
   return await Checklist.create(checklist);
}

controller.edit = async (id, checklist) => {
   await Checklist.update(checklist, {
      where: { id },
   });

   return await controller.getChecklist[id];
}

controller.remove = async (notaId, id) => {
   try {
   return await Checklist.destroy({ where: { id, notaId } });
   } catch(error) {
      console.log(error);
      throw new Error(error);
   }
};


controller.getByUsuarioId = async (usuarioId) => {
   try {
      return await Checklist.findAll({
         include: [
            {
               model: Nota,
               as: "nota",
               required: true,
               where: {
                  usuarioId,
               },
            },
         ],
      });
   } catch(error) {
      console.log(error);
      throw new Error(error);
   }
};

module.exports = controller;