"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackShipFactory = void 0;
var ShipFactory_1 = require("./ShipFactory");
var BlackShip_1 = require("./BlackShip");
var BlackShipFactory = /** @class */ (function (_super) {
    __extends(BlackShipFactory, _super);
    function BlackShipFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackShipFactory.prototype.createShip = function () {
        return new BlackShip_1.BlackShip();
    };
    return BlackShipFactory;
}(ShipFactory_1.ShipFactory));
exports.BlackShipFactory = BlackShipFactory;
//# sourceMappingURL=BlackShipFactory.js.map