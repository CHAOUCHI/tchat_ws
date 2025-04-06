import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });



const formatMessage = function(client,clientMessage) {
  const date = new Date(Date.now());

  return `[${client.username}][${date.toDateString()}]${clientMessage}`;
}

wss.on("connection", (currentClient, request) => {
  console.log("New client !");
  
  currentClient.on("message", (data, isBinary) => {

    console.log("New Message !");
    if (currentClient.username == undefined) {
      
      currentClient.username = data.toString();
      return;
    }
    
    const clientMessage = data.toString();

    switch (clientMessage) {
      case "exit":
        currentClient.close();
        break;

      default:
        wss.clients.forEach(client => {
          client.send(formatMessage(currentClient,clientMessage));
        });
        break;
    }


  });

});

