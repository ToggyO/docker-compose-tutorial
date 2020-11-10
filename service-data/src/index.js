const path = require('path');
const http = require('http');

require('dotenv').config({
  path: path.join(process.cwd(), '../.env'),
});

const { requestHandler } = require('./handler');
const { migrate } = require('./db/migrations');

const { DATA_HOST, DATA_PORT, NODE_ENV } = process.env;

const serviceUrl = `http://${DATA_HOST}:${DATA_PORT}`;

const server = http.createServer(requestHandler);

server.listen({
  host: DATA_HOST,
  port: parseInt(DATA_PORT, 10)
}, () => {
  migrate().then(() => console.log(`Data service started on ${serviceUrl} in ${NODE_ENV} mode`));
});