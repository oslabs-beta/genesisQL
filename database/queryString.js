module.exports = {
    createUserTable: `CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR)`,

    queryLogging: function (){
        console.log('\n*********** visitsController.createVisit ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
    }

    }