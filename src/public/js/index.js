let socket = io();

socket.on('connect', (socket) => {
    console.log('Connected to the server');
  });