const { Client } = require('pg');

const {
  NODE_ENV,
  PG_HOST,
  PG_PORT,
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
    console.log(NODE_ENV);
    const client = new Client({
      host: PG_HOST,
      port: NODE_ENV === 'development' ? PG_EXTERNAL_PORT :  PG_PORT,
      user: PG_USER,
      password: PG_PASSWORD,
      database: PG_DB,
    });

    await client.connect();

    return client;
  }
}

module.exports.db = new Connector();
