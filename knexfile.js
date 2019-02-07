const config = require('./config');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'bearbnb_dev',
      user:     'postgres',
      password: config.password,
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + 'db/seeds/development'
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bearbnb_staging',
      user:     'postgres',
      password: config.password,
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + 'db/seeds/development'
      }
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
      database: 'bearbnb',
      user:     'postgres',
      password: config.password,
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + 'db/seeds/development'
      }
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
