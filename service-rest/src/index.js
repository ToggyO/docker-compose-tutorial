const path = require('path');
const http = require('http');

require('dotenv').config({
  path: path.join(process.cwd(), '../.env'),
});

const { requestHandler } = require('./handler');

const { REST_HOST, REST_PORT, NODE_ENV } = process.env;

const serviceUrl = `http://${REST_HOST}:${REST_PORT}`;

const server = http.createServer(requestHandler);

server.listen({
  host: REST_HOST,
  port: parseInt(REST_PORT, 10)
}, () =>
  console.log(`Rest service started on ${serviceUrl} in ${NODE_ENV} mode`
));