"use strict";
exports.__esModule = true;
var Remote = /** @class */ (function () {
    function Remote() {
    }
    //tv: TV;
    Remote.prototype.turnOn = function (string) {
        console.log("Tv is on from remote");
    };
    Remote.prototype.turnOff = function () { };
    Remote.prototype.switchChannel = function () { };
    return Remote;
}());
exports.Remote = Remote;
