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

      Usuario.associate = function (models) {
        this.hasMany(models.Nota, {
            foreignKey: 'usuarioId',
        });
    };

      return Usuario;
    };





        
  