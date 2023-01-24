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
exports.WhiteShipFactory = void 0;
var ShipFactory_1 = require("./ShipFactory");
var WhiteShip_1 = require("./WhiteShip");
var WhiteShipFactory = /** @class */ (function (_super) {
    __extends(WhiteShipFactory, _super);
    function WhiteShipFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhiteShipFactory.prototype.createShip = function () {
        return new WhiteShip_1.WhiteShip();
    };
    return WhiteShipFactory;
}(ShipFactory_1.ShipFactory));
exports.WhiteShipFactory = WhiteShipFactory;
//# sourceMappingURL=WhiteShipFactory.js.map