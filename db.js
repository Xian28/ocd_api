require('dotenv').config();
const { Pool, Client } = require('pg');

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
}

const pool = new Pool(config)
const client = new Client(config)

module.exports = pool;