const { Sequelize, DataTypes } = require('sequelize');
const options = require('../config/database');
const _Usuario = require('./usuario');
const _Nota = require('./nota');
const _Tag = require('./tag');
const _Checklist = require('./checklist');
const database = {};

const sequelize = new Sequelize(options);

let Usuario = _Usuario(sequelize, DataTypes);
let Nota = _Nota(sequelize, DataTypes);
let Tag = _Tag(sequelize, DataTypes);
let Checklist = _Checklist(sequelize, DataTypes);

Checklist.belongsTo(Nota, { as: 'nota', foreignKey: 'notaId'});
Nota.hasMany(Checklist, { as: 'checklists', foreignKey: 'notaId'});
Nota.hasMany(Tag, { as: 'tags', foreignKey: 'notaId'});
Nota.belongsTo(Usuario, { as: 'usuario', foreignKey: 'usuarioId'});
Tag.belongsTo(Nota, { as: 'nota', foreignKey: 'notaId'});

database['Usuario'] = Usuario;
database['Nota'] = Nota;
database['Tag'] = Tag;
database['Checklist'] = Checklist;

for(const key in database){
    if(database[key].associate) database[key].associate(database);
}

sequelize.authenticate()
.then(() => console.log(`Conexão com banco ${options.database} foi bem sucedida`))
.catch(error => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;