import { Ship } from './Ship';
import { ShipFactory } from "./ShipFactory";
import { WhiteShip } from "./WhiteShip";

export class WhiteShipFactory extends ShipFactory {
  createShip(): Ship {
    return new WhiteShip();
  }

}