const { app, port } = require("./app");
// sets development port
let server = app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = server;
