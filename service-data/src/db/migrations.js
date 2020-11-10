const { db } = require('./connector');

const { PG_DB } = process.env;

const createDatabase = async () => {
  const query = `CREATE DATABASE ${PG_DB}`;

  try {
    await db.connection.query(query);
    await db.connection.end();
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
    await db.connection.query(query);
    await db.connection.end();
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async () => {
  const query = `INSERT INTO users (Name, Age) VALUES ('Slava', 'Ukrainin')`;

  try {
    await db.connection.query(query);
    await db.connection.end();
  } catch (error) {
    throw new Error(error);
  }
};