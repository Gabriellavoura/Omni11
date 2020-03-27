// Metodo responsavel por criar a tabela
exports.up = function(knex) {

  return knex.schema.createTable('incidents', function(table){
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    //create a relationship with ong's table:
    table.string('ong_id').notNullable();

    //create a foreign key:
    table.foreign('ong_id').references('id').inTable('ongs');
  });
  
};
// metodo que retorna ou seja se der errado o que ele faz.
exports.down = function(knex) {

  return knex.schema.dropTable('incidents');
  
};
