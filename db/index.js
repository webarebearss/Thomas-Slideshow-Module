
const knexConfig = require('../knexfile');
let env = 'development';
let knex = require('knex')(knexConfig[env]);

module.exports = knex;

module.exports.initialize = function () {
  knex.migrate.latest([knexConfig])
  .then(function() {
    return knex.seed.run();
  })
}