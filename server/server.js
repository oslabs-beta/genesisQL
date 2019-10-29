const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});
// app.use(express.static(path.resolve(__dirname, '../public')));
// app.use(express.static(path.resolve(__dirname, '../dist')));

/* Handles getting data and send it back to clients */
app.get('/request', (req, res) => {
    const {url} = req.body;
    fetch(url)
    .then(data => data.json())
    .then(e => res.send(e));
});

app.post('/code', )
app.get('/test', )


app.listen(port, () => console.log('listening on port ' + port));
