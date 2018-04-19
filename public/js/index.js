var socket = io();
socket.on('connect', () => {
    console.log("ok")
});

socket.on('disconnect', () => {
    console.log("disconnected");
});

socket.on('userMessage', (message) => {
    console.log(message) 
})