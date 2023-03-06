"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.order = function (ship, email) {
        console.log(ship.orderShip(email).toString());
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map