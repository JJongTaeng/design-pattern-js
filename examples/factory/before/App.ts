import { ShipFactory } from "./ShipFactory";

class App {
  start() {
    const whiteship = ShipFactory.orderShip('whiteship', 'jjojjo141995@gmail.com');
    console.log(whiteship.toString());

    const blackship = ShipFactory.orderShip('blackship', 'jjojjo141995@gmail.com');
    console.log(blackship.toString());
  }
}

const app = new App();
app.start();