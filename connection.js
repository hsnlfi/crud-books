require('dotenv').config();

const { Client } = require('pg'); // Use 'Client' instead of 'client'

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = client;
