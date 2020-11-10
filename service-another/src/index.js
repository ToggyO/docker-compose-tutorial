const path = require('path');
const http = require('http');

require('dotenv').config({
  path: path.join(process.cwd(), '../.env'),
});

const { requestHandler } = require('./handler');

const { ANOTHER_HOST, ANOTHER_PORT, NODE_ENV } = process.env;

const serviceUrl = `http://${ANOTHER_HOST}:${ANOTHER_PORT}`;

const server = http.createServer(requestHandler);

server.listen(ANOTHER_PORT, () =>
  console.log(`Another service started on ${serviceUrl} in ${NODE_ENV} mode`
));