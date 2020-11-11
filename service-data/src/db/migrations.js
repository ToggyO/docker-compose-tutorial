const { db } = require('./connector');

const { PG_DB } = process.env;

const createDatabase = async () => {
  const query = `CREATE DATABASE ${PG_DB}`;

  try {
    const client = await db.connection();
    await client.query(query);
    await client.end();
  } catch (error) {
    throw new Error(error);
  }
};

const createUsersTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    Id SERIAL PRIMARY KEY,
    Name CHARACTER VARYING(100),
    Age INTEGER
  )`;

  try {
    const client = await db.connection();
    await client.query(query);
    await client.end();
    console.log('Table users is successfully created!');
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async () => {
  const query = `INSERT INTO users (Name, Age) VALUES ('Vova', 26), ('Leha', 26), ('Misha', 26);`;

  try {
    const client = await db.connection();
    await client.query(query);
    await client.end();
    console.log('Default user is successfully added!');
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.migrate = async () => {
  await createUsersTable();
  // await createUser();
}