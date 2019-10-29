const pgClient = require('../pgClient.js');

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

// let req = {};
// req.body = {
//     username: 'bob',
//     password: 'frank'
// }

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
let req = {};
req.body = {
    username: 'bobs',
    password: 'frank'
}

checkPassword(req, undefined ,() => {})