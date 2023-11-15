//IO socket
let socket = io();

    socket.on('message', (socket) => {
            console.log('Connected to the server');
        });             