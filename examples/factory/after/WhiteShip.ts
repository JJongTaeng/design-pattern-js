import { Ship } from "./Ship";

export class WhiteShip extends Ship {
  constructor() {
    super();
    this.setLogo("\uD83D\uDEE5️");
    this.setColor('white');
    this.setName('whilteship');
  }
}