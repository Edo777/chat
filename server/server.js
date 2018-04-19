'use strict';

const path = require("path");
const express = require("express");
const http = require("http");
const publicPath = path.join(__dirname, '../public');
const socketIO = require("socket.io");

const { generateMessage } = require("./utils/message");
const PORT = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        socket.emit('userMessage', generateMessage(message.from, message.text), function(data){
            console.log(data)
        });
    });
});

app.use(express.static(publicPath));

server.listen(PORT, () => {
    console.log("listen to ", PORT)
});