const express = require('express');
const { createServer } = require('node:http');
const app = express();
const server = createServer(app);
const PORT = 4000;

const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send('./public/index.html');
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    })
  });

server.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});