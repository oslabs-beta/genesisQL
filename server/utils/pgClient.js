const { Pool } = require('pg');

const myURI = 'postgres://juqdonnj:URk1eALCbIPa5tgs29o2Tzs9YkvgL_yx@salt.db.elephantsql.com:5432/juqdonnj';

const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

const table = 
`CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR)`;
pool.query(table, (err, result) => {
    if(err) console.log('FIRST error', err);
    else {
        console.log('TABLE tests EXISTS')
    }
});

module.exports = pool;




