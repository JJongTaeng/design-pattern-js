"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipFactory = void 0;
var ShipFactory = /** @class */ (function () {
    function ShipFactory() {
    }
    ShipFactory.prototype.orderShip = function (name, email) {
        this.validate(name, email);
        this.prepareFor(name);
        var ship = this.createShip();
        this.sendEmailTo(email, ship);
        return ship;
    };
    ShipFactory.prototype.validate = function (name, email) {
        if (name === null || name.length === 0) {
            throw new Error("배 이름을 지어주세요.");
        }
        if (email === null || email.length === 0) {
            throw new Error("연락처를 남겨주세요.");
        }
    };
    ShipFactory.prototype.prepareFor = function (name) {
        console.log(name + " 만들 준비 중");
    };
    ShipFactory.prototype.sendEmailTo = function (email, ship) {
        console.log(email + '에게...' + ship.getName() + "다 만들었습니다.");
    };
    return ShipFactory;
}());
exports.ShipFactory = ShipFactory;
//# sourceMappingURL=ShipFactory.js.map