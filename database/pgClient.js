const { Pool } = require('pg');
const queryString = require('./queryString.js');
require('dotenv').config();

const myURI = '';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

// creates users table
pool.query(queryString.createUserTable, (err, result) => {
  if (err) console.error('FIRST error', err);
  else {
    console.log('TABLE users EXISTS');
  }
});

module.exports = pool;
