const { Tag, Nota } = require('../models');
const controller = {};

controller.getTags = async (id = null) => {
    let result = [];
    if(id){
       result = await Tag.findByPk(id);
    } else {
       result = await Tag.findAll();
    }

    return result;
};

controller.save = async (tag) => {
   return await Tag.create(tag);
}

controller.edit = async (id, tag) => {
   await Tag.update(tag, {
      where: { id },
   });

   return await controller.getTags[id];
}

controller.remove = async (notaId, id) => {
   try {
      return await Tag.destroy({ 
         where: { 
            id,
            notaId,
         },
      });
   } catch (error) {
      console.log(error);
      throw new Error(error);
   }
};


controller.getByUsuarioId = async (usuarioId) => {
   try {
      return await Tag.findAll({ 
         include: [
            { 
               model: Nota,
               required: true,
               as: 'nota',
               where: {
                  usuarioId,
               }
            },
         ],
      });
   } catch (error) {
      console.log(error);
      throw new Error(error);
   }
};

module.exports = controller;