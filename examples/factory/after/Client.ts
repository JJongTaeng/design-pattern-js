import { ShipFactory } from "./ShipFactory";

export class Client {
  public static order(ship: ShipFactory, email: string) {
    console.log(ship.orderShip(email).toString());
  }
}