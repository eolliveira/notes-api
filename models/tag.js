//const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Tag = sequelize.define(
    'Tag', 
    {
        id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
        },
        notaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'nota',
            key: 'id'
        }
        },
        nome: {
        type: DataTypes.STRING(50),
        allowNull: false
        }
    }, {
        tableName: 'tag',
        timestamps: false,
    });

    // Tag.associate = function (models) {
    //     this.belongsTo(models.Nota, {
    //         foreignKey: 'notaId',
    //     });
    // };

    return Tag;
};
