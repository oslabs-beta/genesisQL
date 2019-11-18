// require in libraries
const express = require('express');
const { ApolloServer } = require('apollo-server');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const searchController = require('./utils/searchController.js');
const schemaGen = require('./utils/create_templates/schema.js');

const graphQLschema = require('./utils/create_templates/schema.js');

require('dotenv').config();

// console.log('PROCESS ENV', process.env);

// create our server
const app = express();
const port = process.env.PORT || 3000;

// handle incoming objects
app.use(bodyParser());
app.use(cookieParser());
app.use(express.json());
// handles post data
app.use(bodyParser.urlencoded({ extended: true }));

/* Handles getting data and send it back to clients */

app.post('/search', searchController.fetch, /* searchController.post, */(req, res) => {
  // console.log('RESPONSE LOCALS FETCHED DATA', res.locals.fetch);
  // const { fetch } = res.locals
  res.send(res.locals.fetch);
});

// TO GENERATE CODE app.post('/code', )
app.post('/code', (req, res) => {
  const { objectTypes } = req.body;
  // console.log(req.body);
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify(schemaGen(objectTypes)));
});

// serves PRODUCTION bundle
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serves static developemnt files (/public) - DEV
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// sets development port
app.listen(port, () => console.log(`listening on port ${port}`));
