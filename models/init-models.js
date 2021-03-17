var DataTypes = require("sequelize").DataTypes;
var _checklist = require("./checklist");

function initModels(sequelize) {
  var checklist = _checklist(sequelize, DataTypes);

  checklist.belongsTo(nota, { as: "notum", foreignKey: "notaId"});
  nota.hasMany(checklist, { as: "checklists", foreignKey: "notaId"});

  return {
    checklist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
