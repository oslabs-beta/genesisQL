const { app, port } = require('./app');
// sets development port
const server = app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = server;
