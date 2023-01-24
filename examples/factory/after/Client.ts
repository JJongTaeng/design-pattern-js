import { ShipFactory } from "./ShipFactory";

export class Client {
  public static order(ship: ShipFactory, name: string, email) {
    console.log(ship.orderShip(name, email).toString());
  }
}