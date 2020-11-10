module.exports.requestHandler = async (req, res) => {
  res.statusCode = 200;
  res.write('Hello from another service');
  res.end();
};