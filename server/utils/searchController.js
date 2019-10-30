const pgClient = require('../../database/pgClient.js');
const queryString = require('../../database/queryString.js');
const fetch  = require('node-fetch');
const searchController = {};

pgClient.query(queryString.createSearchTable, (err, result) => {
    if(err) console.error('FIRST error', err);
    else {
        console.log('TABLE searches EXISTS')
    }
});

searchController.fetch = (req, res, next) => {
    const { url } = req.body;
    console.log(url);
    fetch(url)
      .then((data) => {
        //   console.log(data);
          return data.json();
        })
      .then((e) => {
        //   console.log(e);
          res.locals.fetch = e;
          next()
      })
      .catch(err => next(err));
  }
// let req = {}
// req.body = {url: 'https://swapi.co/api/people/1/'}
// let res = {};
// res.locals = {};
// searchController.fetch(req, res, () => {});

searchController.post = (req, res, next) => {
    const {url} = req.body;
    const values = [`${url}`, `${res.locals.fetch}`];
    pgClient.query(queryString.postSearchTable, values, (err, result) => {
        console.log(values);
        if(err) next(err);
        else {
            // console.log(`Cached Response from URL: ${url}`);
            res.send("Complete");
            next();
        }
    });
}

// searchController.post(req, res, () => {});


module.exports = searchController;