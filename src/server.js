'use strict';
const express = require('express');
const app = express();

function start(port){
  app.listen(port, () => console.log(`Up on http:localhost:${port}`));
}

app.get('/', (req,res) => {
  res.status(200).send('Welcome to my first AWS server')
});

module.exports = {
  server:app,
  start: start
}
