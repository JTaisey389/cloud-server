'use strict';

const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);

io('connected', (socket) => {
  socket.on('Weclome to the web', payload => {
    console.log(payload, 'This is my first attempt at doing AWS');
    socket.emit('Here is the show', `Welcome, ${payload}`);
  })
})
