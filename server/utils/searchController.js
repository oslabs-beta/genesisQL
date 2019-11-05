const pgClient = require('../../database/pgClient.js');
const queryString = require('../../database/queryString.js');
const fetch = require('node-fetch');
const searchController = {};
// searchController is the express middleware that handles the req
// from the searchbar

pgClient.query(queryString.createSearchTable, (err, result) => {
  if (err) console.error('FIRST error', err);
  else {
    console.log('TABLE searches EXISTS')
  }
});

searchController.fetch = (req, res, next) => {
  const { url } = req.body;
  // console.log(url);
  fetch(url)
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((result) => {
      // console.log('RESULT IN THE SERVER CONTROLLER', result);
      res.locals.fetch = result;
      return next()
    })
    .catch(err => next(err));
}
// Unit test for fetch func
// TODO: move to test file
// let req = {}
// req.body = {url: 'https://swapi.co/api/people/1/'}
// let res = {};
// res.locals = {};
// searchController.fetch(req, res, () => {});

searchController.post = (req, res, next) => {
  const { url } = req.body;
  const values = [`${url}`, `${res.locals.fetch}`];
  pgClient.query(queryString.postSearchTable, values, (err, result) => {
    console.log(values);
    if (err) next(err);
    else {
      // console.log(`Cached Response from URL: ${url}`);
      res.send("Complete");
      return next();
    }
  });
}

// searchController.post(req, res, () => {});
module.exports = searchController;