const { Client } = require('pg');

const {
  PG_HOST,
  PG_EXTERNAL_PORT,
  PG_USER,
  PG_PASSWORD,
  PG_DB,
} = process.env;

class Connector {
  constructor() {
    this.connection = this.connection.bind(this);
  }

  async connection() {
    const client = new Client({
      host: PG_HOST,
      port: PG_EXTERNAL_PORT,
      user: PG_USER,
      password: PG_PASSWORD,
      database: PG_DB,
    });

    await client.connect();

    return client;
  }
}

module.exports.db = new Connector();