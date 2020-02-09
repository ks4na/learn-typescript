"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
// let a = Direction.Up
// console.log(a)  // 1
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A; // a = 0
var nameOfA = Enum[a]; // nameOfA = 'A'
console.log(a, nameOfA);
var resArr = [200 /* Ok */, 404 /* NotFound */];
console.log(resArr);
