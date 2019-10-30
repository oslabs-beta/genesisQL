module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR)`,
    createSearchTable: `CREATE TABLE IF NOT EXISTS searches (_id SERIAL PRIMARY KEY, url VARCHAR, result VARCHAR)`,
    postSearchTable: `INSERT INTO searches (url, result) VALUES($1, $2)`,
    queryLogging: function (){
        console.log('\n*********** visitsController.createVisit ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
    }

    }