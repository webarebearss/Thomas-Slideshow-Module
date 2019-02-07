const config = require('./config');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'bearbnb_dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bearbnb',
      user:     'postgres',
      password: config.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
