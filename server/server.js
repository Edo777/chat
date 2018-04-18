'use strict';

const path = require("path");
const express = require("express");
const http = require("http");
const publicPath = path.join(__dirname, '../public');
const socketIO = require("socket.io");

const PORT = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log("connected new user");
    socket.on('disconnect', () => {
        console.log("disconnected")
    })
})

app.use(express.static(publicPath));

server.listen(PORT, () => {
    console.log("listen to ", PORT)
});