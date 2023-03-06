import { Ship } from "./Ship";

export abstract class ShipFactory {
  abstract createShip(): Ship;

  orderShip(email: string) {
    const ship = this.createShip();
    this.prepareFor(ship.getName());
    this.validate(ship.getName(), email);
    this.sendEmailTo(email, ship);
    return ship;
  }

  private validate(name: string, email: string) {
    if(name === null || name.length === 0) {
      throw new Error("배 이름을 지어주세요.");
    }
    if(email === null || email.length === 0) {
      throw new Error("연락처를 남겨주세요.");
    }

  }

  private prepareFor(name: string) {
    console.log(name + " 만들 준비 중");
  }

  private sendEmailTo(email: string, ship: Ship) {
    console.log(email + '에게...' + ship.getName() + "다 만들었습니다.");
  }
}