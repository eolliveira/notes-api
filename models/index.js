const { Sequelize } = require('sequelize');
const database = {};

const options = {
    username: 'postgres',
    password: '123',
    database: 'notas',
    host: 'localhost',
    dialect: 'postgres',
};

const sequelize = new Sequelize(options);

sequelize.authenticate()
.then(() => console.log(`Conexão com banco ${options.database} foi bem sucedida`))
.catch(error => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;