const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Run when a client connects
io.on('connection', socket => {
  // Send a welcome message to the connected client
  socket.emit('message', 'Welcome to the chatroom!');

  // Broadcast a message to all connected clients when a user joins
  socket.broadcast.emit('message', 'A user has joined the chatroom.');

  // Listen for chat messages from clients
  socket.on('chatMessage', message => {
    io.emit('message', message);
  });

  // Broadcast a message to all connected clients when a user disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chatroom.');
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});