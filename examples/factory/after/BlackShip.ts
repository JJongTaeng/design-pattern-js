import { Ship } from "./Ship";

export class BlackShip extends Ship {
  constructor() {
    super();
    this.setLogo("⚓");
    this.setColor('black');
    this.setName('blackship');
  }
}