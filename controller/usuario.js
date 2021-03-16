const database = require('../models');
const controller = {};

controller.getUsuarios = () => {
    return [
        {
            nome: 'Erick'
        }, 
        {
            nome: 'Pedro'
        }
    ];
};

module.exports = controller;