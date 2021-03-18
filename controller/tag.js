const { Tag } = require('../models');
const tag = require('../models/tag');
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
   await Tag.update(usuario, {
      where: { id },
   });

   return await controller.getTags[id];
}

controller.remove = async (id) => {
   try {
   return await Tag.destroy({ where: { id } });
   } catch(error) {
      throw new Error(error);
   }
};

module.exports = controller;