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
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    }, {
      tableName: 'checklist',
      timestamps: false,
  });

  return Checklist;
};
