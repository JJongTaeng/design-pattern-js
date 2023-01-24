import { ShipFactory } from "./ShipFactory";
import { BlackShip } from "./BlackShip";
import { Ship } from "./Ship";

export class BlackShipFactory extends ShipFactory {
  createShip(): Ship {
    return new BlackShip();
  }
}