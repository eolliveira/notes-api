const { Usuario } = require('../models');
//const usuario = require('../models/usuario');
const controller = {};

controller.getUsuarios = async (id = null) => {
    let result = [];
    if(id){
       result = await Usuario.findByPk(id);
    } else {
       result = await Usuario.findAll();
    }

    return result;
};

controller.save = async (usuario) => {
   return await Usuario.create(usuario);
}

controller.edit = async (id, usuario) => {
   await Usuario.update(usuario, {
      where: { id },
   });

   return await controller.getUsuarios[id];
}

controller.remove = async (id) => {
   try {
   return await Usuario.destroy({ where: { id } });
   } catch(error) {
      throw new Error(error);
   }
};

module.exports = controller;