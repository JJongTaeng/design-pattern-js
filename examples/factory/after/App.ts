import { WhiteShipFactory } from "./WhiteShipFactory";
import { BlackShipFactory } from "./BlackShipFactory";
import { Client } from "./Client";

class App {
  start() {
    Client.order(new WhiteShipFactory(), 'jjojjo141995@gmail.com');
    Client.order(new BlackShipFactory(),  'jjojjo141995@gmail.com');
  }
}

const app = new App();
app.start();