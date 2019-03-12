// //for knex
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

//for mongoose
const mongoose = require('mongoose');
const Room = require('./models/Room')

const mongoURI = 'mongodb://localhost/rooms';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

module.exports = db;