// Crypto library from nodejs
const crypto = require('crypto');
// knex connection 
const connection = require('../database/connection');

// Export module 
module.exports = {

  // List all elements on database
  async index ( request, response ) {

      // ongs aguarda o recebimento da conexão no banco ongs e seleciona tudo
  const ongs = await connection('ongs').select('*');

  // resposta que é retornada pelo metodo get em formato json
  return response.json({
    ongs
  });

  },

  // Create a entity on database
  async create ( request , response ) {

    const { name, email, whatsapp, city, uf } = request.body;
    const data = request.body;
  
    // create a id with cryptographed style
    const id = crypto.randomBytes(4).toString('HEX');
  
    // As the connection can take a some time, whe define the function as asynchronous, which means that we need to insert
    // the "await" prefix in the method.
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
    return response.json({
      id,
      data
  
    })

  }

};