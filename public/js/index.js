var socket = io();
socket.on('connect', () => {
    console.log("ok")
});

socket.on('disconnect', () => {
    console.log("disconnected");
});

socket.on('message', function(message) {
    console.log(message);
    socket.emit('userresponse', {
        status : "ok"
    });
});