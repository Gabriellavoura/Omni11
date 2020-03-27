const knex = require('knex');
const configuration = require('../../knexfile');

// Escolhe a conexão de desenvolvimento do arquivo knext config;
const connection = knex( configuration.development );


module.exports = connection;