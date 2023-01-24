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
exports.BlackShip = void 0;
var Ship_1 = require("./Ship");
var BlackShip = /** @class */ (function (_super) {
    __extends(BlackShip, _super);
    function BlackShip() {
        var _this = _super.call(this) || this;
        _this.setLogo("⚓");
        _this.setColor('black');
        _this.setName('blackship');
        return _this;
    }
    return BlackShip;
}(Ship_1.Ship));
exports.BlackShip = BlackShip;
//# sourceMappingURL=BlackShip.js.map