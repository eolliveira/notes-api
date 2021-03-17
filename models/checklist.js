//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Checklist =  sequelize.define(
    'Checklist',
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'checklist',
    timestamps: false,
  });

  Checklist.associate = function (models) {
    this.belongsTo(models.Nota, {
        foreignKey: 'notaId',
    });
};

  return Checklist;
};
