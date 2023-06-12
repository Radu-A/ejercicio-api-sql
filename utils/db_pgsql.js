require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DB,
    password: process.env.PG_PASS
})

module.exports = pool;