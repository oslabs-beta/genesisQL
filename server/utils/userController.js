const pgClient = require('../../database/pgClient.js');
// import queryString from '../../database/queryString.js';

function createNewUser (req, res, next) {
    const { username, password } = req.body;
    const text = `INSERT INTO users (username, password) VALUES($1, $2)`;
    const values = [`${username}`, `${password}`];
    pgClient.query(text, values, (err, result) => {
        if(err) next(err);
        next();
        console.log('users', result.rows[0]);
    })
}

let req = {};
req.body = {
    username: 'bob',
    password: 'frank'
}

createNewUser(req, undefined ,() => {})

function checkPassword (req, res, next){
    const { username, password } = req.body;
    // const values = [];
    const text = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    pgClient.query(text, [], (err, result) => {
        if(err) next(err);
        if(result.rowCount === 0){
            //send message when we have wrong username or password
            res.send('wrong username or password')
        }else{
            next();
        }
    })
}
// let req = {};
// req.body = {
//     username: 'bobs',
//     password: 'frank'
// }

// checkPassword(req, undefined ,() => {})

function updateUser (req, res, next) {
    const { username, password } = req.body;
    const text = `UPDATE users SET password= $2 WHERE username= $1`;
    const values = [`${username}`, `${password}`];
    pgClient.query(text, values, (err, result) => {
        if(err) next(err);
        // console.log('inside and deep')
        next();
    })
}
// let req = {};
// req.body = {
//     username: 'bob',
//     password: 'franks'
// }

// updateUser(req, undefined,() => {})

function deleteUser (req, res, next) {
    const { username } = req.body;
    const text = `DELETE FROM users WHERE username=$1`;
    const value = [`${username}`];
    pgClient.query(text, value, (err, result) => {
        if(err) next(err);
        console.log('deleted')
    })
}
// let req = {};
// req.body = {
//     username: 'bob',
//     password: 'frank'
// }

// deleteUser(req, undefined ,() => {})

