const { Checklist } = require('../models');
//const checklist = require('../models/checklist');
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

controller.remove = async (id) => {
   try {
   return await Checklist.destroy({ where: { id } });
   } catch(error) {
      throw new Error(error);
   }
};

module.exports = controller;