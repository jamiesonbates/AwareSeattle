'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/awareseattle_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/awareseattle_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
