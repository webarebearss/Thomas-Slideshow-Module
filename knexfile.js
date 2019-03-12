module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      database: 'listings',
      user:     'root',
      password: ''
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
  //,
  // staging: {
  //   client: 'mysql',
  //   connection: {
  //     host:     process.env.RDS_HOSTNAME,
  //     port:     process.env.RDS_PORT,
  //     database: process.env.RDS_DB_NAME,
  //     user:     process.env.RDS_USERNAME,
  //     password: process.env.RDS_PASSWORD
  //   },
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/staging'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'mysql',
  //   connection: {
  //     host:     process.env.RDS_HOSTNAME,
  //     port:     process.env.RDS_PORT,
  //     database: process.env.RDS_DB_NAME,
  //     user:     process.env.RDS_USERNAME,
  //     password: process.env.RDS_PASSWORD
  //   },
  //   migrations: {
  //     directory: __dirname + '/db/migrations'
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds/production'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
