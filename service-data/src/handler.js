module.exports.requestHandler = (req, res) => {
  res.statusCode = 200;
  res.write('Hello from data service');
  res.end();
};