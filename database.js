const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'gabriel123',
    database: 'meu_banco'
  }
})

module.exports = knex
