// require in libraries
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const searchController = require('./utils/searchController.js');

// create our server
const app = express();
const port = process.env.PORT || 3000;

// handle incoming objects
app.use(express.json());
app.use(bodyParser());
app.use(cookieParser());

/* Handles getting data and send it back to clients */
app.post('/search', searchController.fetch, searchController.post, (req, res) => {
  console.log('Completed Search');
});

// TO GENERATE CODE app.post('/code', )

// serves PRODUCTION bundle
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serves static developemnt files (/public) - DEV
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// sets development port
app.listen(port, () => console.log(`listening on port ${  port}`));
