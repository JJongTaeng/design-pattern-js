import { Ship } from './Ship';

export class ShipFactory {
  public static orderShip(name: string, email: string): Ship {
    if(name === null || name.length === 0) {
      throw new Error("배 이름을 지어주세요.");
    }
    if(email === null || email.length === 0) {
      throw new Error("연락처를 남겨주세요.");
    }

    this.prepareFor(name);
    const ship = new Ship();
    ship.setName(name);

    switch(name) {
      case 'whiteship':
        ship.setLogo("\uD83D\uDEE5️");
        ship.setColor('white');
        break;
      case 'blackship':
        ship.setLogo("⚓");
        ship.setColor('black');
        break;
    }

    this.sendEmailTo(email, ship);

    return ship;
  }

  private static prepareFor(name: string) {
    console.log(name + " 만들 준비 중");
  }

  private static sendEmailTo(email: string, ship: Ship) {
    console.log(ship.getName() + "다 만들었습니다.");
  }
}