const { db } = require('./db/connector');

module.exports.requestHandler = async (req, res) => {
  const query = 'SELECT Id, Name, Age FROM users;'
  try {
    const client = await db.connection();
    const result = await client.query(query);
    await client.end();
    res.statusCode = 200;
    res.write(JSON.stringify(result.rows));
  } catch (error) {
    res.statusCode = 500;
  }

  res.end();
};
