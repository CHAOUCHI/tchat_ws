import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline/promises";
// Creates a new WebSocket connection to the specified URL.

const logger = createInterface({ input: stdin, output: stdout });


async function main() {
  
  
  const username = await logger.question("What's your name ?").catch(console.error);
  
  const client = new WebSocket('ws://localhost:8080');

  client.addEventListener("open", (e) => {
    client.send(username);

    // Handle user keyboard message
    logger.addListener("line", (input) => {
      client.send(input);
    }).setMaxListeners(1);

    // handle server close user
    client.addEventListener("close", (e) => {
      logger.close();
      client.close();
    })

    // handle incomming message
    client.addEventListener("message", (e) => {
      const IncommingMessage = e.data;
      console.log(`${IncommingMessage}`);

    })

  });


}

main();