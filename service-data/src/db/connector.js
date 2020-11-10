const { Client } = require('pg');

const {
  PG_HOST,
  PG_PORT,
  PG_USER,
  PG_PASSWORD,
  PG_DB,
} = process.env;

class Database {
  get connection() {
    return new Client({
      host: PG_HOST,
      port: PG_PORT,
      user: PG_USER,
      password: PG_PASSWORD,
      database: PG_DB,
    });
  }
}

module.exports.db = new Database();