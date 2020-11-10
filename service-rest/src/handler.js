const axios = require('axios');

const {
  DATA_HOST,
  DATA_PORT,
  ANOTHER_HOST,
  ANOTHER_PORT,
} = process.env;

const request = async (url, res) => {
  try {
    const response = await axios.get(`${url}/${url}`);
    res.statusCode = 200;
    res.write(response.data);
  } catch (error) {
    res.statusCode = 500;
    res.write('Ooops');
  }
}

module.exports.requestHandler = async (req, res) => {
  const url = req.url;
  const dataServiceUrl = `http://${DATA_HOST}:${DATA_PORT}`;
  const anotherServiceUrl = `http://${ANOTHER_HOST}:${ANOTHER_PORT}`;

  switch (url) {
    case '/ping-data-service':
      await request(`${dataServiceUrl}/${url}`, res);
      break;

    case '/ping-another-service':
      await request(`${anotherServiceUrl}/${url}`, res);
      break;

    default:
      res.statusCode = 404;
      res.write('Not found');
      break;
  }

  res.end();
};