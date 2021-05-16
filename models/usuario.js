const bcrypt = require('bcrypt');
const { saltRounds } = require('../config/security');
const { Usuario } = require(".");

module.exports = function(sequelize, DataTypes) {
    const Usuario = sequelize.define(
    'Usuario', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          senha: {
            type: DataTypes.STRING,
            allowNull: false
          },
          avatar: {
            type: DataTypes.STRING,
            allowNull: true
          },
        },
         {
           tableName: 'usuario',
           timestamps: false,
           hooks: {
             beforeValidate: (usuario) => {
               if(usuario.senha) usuario.senha = bcrypt.hashSync(usuario.senha, saltRounds);
             },
           },
           defaultScope: {
             attributes: {
               exclude: ['senha'],
             },
           },
           scopes: {
             login: {
               attributes: ['id', 'senha'],
             }
           }
         }
      );
      
      return Usuario;
    };





        
  