const { Sequelize, DataTypes } = require('sequelize');
const { NODE_ENV } = process.env;

console.log(NODE_ENV);
let options = require('../config/database');
const _Usuario = require('./usuario');
const _Nota = require('./nota');
const _Tag = require('./tag');
const _Checklist = require('./checklist');
const database = {};

//const options = {
//    username: 'postgres',
//    password: '123',
//    database: 'notas',
//    host: 'localhost',
//    dialect: 'postgres',
//};

options = options[NODE_ENV]


const sequelize = new Sequelize(options);

let Usuario = _Usuario(sequelize, DataTypes);
let Nota = _Nota(sequelize, DataTypes);
let Tag = _Tag(sequelize, DataTypes);
let Checklist = _Checklist(sequelize, DataTypes);

database['Usuario'] = Usuario;
database['Nota'] = Nota;
database['Tag'] = Tag;
database['Checklist'] = Checklist;

for(const key in database){
    if(database[key].associate) database[key].associate(database);
}


Tag.findAll({
    include: [
        {
            model: Nota,
        },
    ],
}).then((result) => console.log(result));


sequelize.authenticate()
.then(() => console.log(`Conexão com banco ${options.database} foi bem sucedida`))
.catch(error => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;