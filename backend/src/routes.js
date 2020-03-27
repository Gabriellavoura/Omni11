const express = require('express');

const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const routes =  express.Router();


// Rota para listar elementos da tabela
routes.get('/ongs', ongController.index);
// Rota para inserir na tabela através do metodo post  
routes.post('/ongs', ongController.create);

// Login
routes.post('/session', sessionController.create);

// Rota para inserir na tabela através do metodo post  
routes.get('/profile', profileController.index);


// Rota para listar na tabela através do metodo post  
routes.post('/incidents', incidentsController.create);
// Rota para inserir na tabela através do metodo post  

routes.get('/incidents', incidentsController.index);
// Rota para inserir na tabela através do metodo post  
routes.delete('/incidents/:id', incidentsController.delete);



module.exports = routes;



/**
* Rota raiz se eu quisesse outra rota ex: app.get('/contato);
* app.get('/',(request,response) =>{
* return response.send('Hello World!');
* });
* quando abro o app ele faz um get, no endereço / utilizando uma arrow function
* que retorna um js object notation
*/

/**
* Métodos HTML:
* GET:     Buscar uma informação do back-end
* POST:    Criar uma informação no back-end
* PUT:     Edita uma informação no back-end
* DELETE:  Remove uma informação no Back-end
*/

/**
 * Tipos de parâmetros:
 *  
 * Query Parms: Parâmetros nomeados inviados na rota após "?" nome="gabriel", Geralmente servem para filtros, paginação
 * Route Parms: Parâmetros usados para identificar recursos (/users/:id => usando users/1 retorna o usuario com a id = 1)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Bancos de dados:
  * 
  * SQL: MySQL, SQLite, PostgreSQL, ORacle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */

  /**
   *  Duas opções para utilização a primeira é instalar o driver:
   *  Driver: SELECT * FROM users
   * A segunda é um :
   * Query Builder: table('users').select('*').from('users')
   * 
   */