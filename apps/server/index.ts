const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;

wss.on('connection', (ws) => {
  userCount += 1;
  console.log("user connected", userCount);

  socket.on("message", (message) => {
    console.log("message received: %s", message.toString());
    setTimeout(() => {
       socket.send(message.toString() + ":sent from server"); 
    }, 1000);
  })
})