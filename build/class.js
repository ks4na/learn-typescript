"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.greet = function () {
        console.log("hello, my name is " + this.name);
    };
    return Human;
}());
var per1 = new Human('yuusha');
per1.greet();
// 类的继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log(this.name + " moves at speed: " + speed);
    };
    return Animal;
}());
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name, legs) {
        var _this = _super.call(this, name) || this;
        _this.legs = legs;
        return _this;
    }
    Horse.prototype.move = function (speed) {
        if (speed === void 0) { speed = 5; }
        console.log('this horse is running...');
        _super.prototype.move.call(this, speed);
    };
    return Horse;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, length) {
        var _this = _super.call(this, name) || this;
        _this.length = length;
        return _this;
    }
    Snake.prototype.move = function (speed) {
        if (speed === void 0) { speed = 3; }
        console.log('this snake is running ...');
        _super.prototype.move.call(this, speed);
    };
    return Snake;
}(Animal));
var horse = new Horse('HorseName', 4);
var snake = new Snake('SnakeName', 1);
horse.move();
snake.move();
// public , private, protected 修饰符
// class Animal1 {
//   public name: string
//   public constructor(name: string) {
//     this.name = name
//   }
//   public move(speed: number){
//     console.log(`${this.name} moves at speed ${speed}`)
//   }
// }
// new Animal1('dog').move(10)
// class Animal2 {
//   private name: string
//   constructor(name: string ) {
//     this.name = name
//   }
// }
// new Animal2('a').name  // Error
// class Animal3 {
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Dog extends Animal3 {
//   constructor(name: string){
//     super(name)
//   }
//   showName(): void {
//     console.log(this.name)
//   }
// }
// new Dog('xyz').showName()
var HungrySingleton = /** @class */ (function () {
    function HungrySingleton() {
    }
    HungrySingleton.getInstance = function () {
        return HungrySingleton.instance;
    };
    HungrySingleton.instance = new HungrySingleton();
    return HungrySingleton;
}());
var instance = HungrySingleton.getInstance();
var instance2 = HungrySingleton.getInstance();
instance.data = 123;
console.log(instance.data);
instance2.data = 345;
console.log(instance.data);
var Circle = /** @class */ (function () {
    function Circle(pi, radius) {
        this.PI = pi;
        this.radius = radius;
    }
    Circle.prototype.getSquare = function () {
        return this.PI * this.radius * this.radius;
    };
    return Circle;
}());
var circle = new Circle(3.14, 20);
console.log(circle.getSquare());
circle.radius = 25;
console.log(circle.getSquare());
// circle.PI = 3.1415926  // Error, readonly
