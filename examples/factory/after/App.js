"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhiteShipFactory_1 = require("./WhiteShipFactory");
var BlackShipFactory_1 = require("./BlackShipFactory");
var Client_1 = require("./Client");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        Client_1.Client.order(new WhiteShipFactory_1.WhiteShipFactory(), 'jjojjo141995@gmail.com');
        Client_1.Client.order(new BlackShipFactory_1.BlackShipFactory(), 'jjojjo141995@gmail.com');
    };
    return App;
}());
var app = new App();
app.start();
//# sourceMappingURL=App.js.map