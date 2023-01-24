"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShipFactory_1 = require("./ShipFactory");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var whiteship = ShipFactory_1.ShipFactory.orderShip('whiteship', 'jjojjo141995@gmail.com');
        console.log(whiteship.toString());
        var blackship = ShipFactory_1.ShipFactory.orderShip('blackship', 'jjojjo141995@gmail.com');
        console.log(blackship.toString());
    };
    return App;
}());
var app = new App();
app.start();
//# sourceMappingURL=App.js.map