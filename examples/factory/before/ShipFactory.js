"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipFactory = void 0;
var Ship_1 = require("./Ship");
var ShipFactory = /** @class */ (function () {
    function ShipFactory() {
    }
    ShipFactory.orderShip = function (name, email) {
        if (name === null || name.length === 0) {
            throw new Error("배 이름을 지어주세요.");
        }
        if (email === null || email.length === 0) {
            throw new Error("연락처를 남겨주세요.");
        }
        this.prepareFor(name);
        var ship = new Ship_1.Ship();
        ship.setName(name);
        switch (name) {
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
    };
    ShipFactory.prepareFor = function (name) {
        console.log(name + " 만들 준비 중");
    };
    ShipFactory.sendEmailTo = function (email, ship) {
        console.log(ship.getName() + "다 만들었습니다.");
    };
    return ShipFactory;
}());
exports.ShipFactory = ShipFactory;
//# sourceMappingURL=ShipFactory.js.map