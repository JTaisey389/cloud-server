'use strict';
const express = require('express');
const app = express();

function start(port){
  app.listen(port, () => console.log(`Up on http:localhost:${port}`));
}
module.exports = {
  server:app,
  start: start
}
