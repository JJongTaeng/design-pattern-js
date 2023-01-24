"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.getName = function () {
        return this.name;
    };
    Ship.prototype.getColor = function () {
        return this.color;
    };
    Ship.prototype.getLogo = function () {
        return this.logo;
    };
    Ship.prototype.setName = function (name) {
        this.name = name;
    };
    Ship.prototype.setColor = function (color) {
        this.color = color;
    };
    Ship.prototype.setLogo = function (logo) {
        this.logo = logo;
    };
    Ship.prototype.toString = function () {
        return "\n    Ship\n      name = ".concat(this.name, "\n      color = ").concat(this.color, "\n      logo = ").concat(this.logo, "\n    ");
    };
    return Ship;
}());
exports.Ship = Ship;
//# sourceMappingURL=Ship.js.map