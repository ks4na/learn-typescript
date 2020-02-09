"use strict";
// // 结构类型系统介绍
// interface Named {
//   name: string
// }
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
Object.defineProperty(exports, "__esModule", { value: true });
// class Person {
//   name: string = 'person'
// }
// let p: Named
// p = new Person()
// // 对象兼容性判断
// let x: Person
// let y = { name: 'y', location: 'xxx' }
// x = y
// interface AnotherPerson {
//   name: string
//   age?: number
// }
// let z: AnotherPerson
// z = y
// function greet(n: Named) {
//   console.log('Hello, ', n.name)
// }
// greet(y)
// // 函数兼容性判断
// let foo1 = (a: number) => 0
// let foo2 = (a: number, b: string) => 0
// foo2 = foo1 // ok
// // foo1 = foo2 // Error
// let xx = () => ({ name: 'xx', age: 12 })
// let yy = () => ({ name: 'yy' })
// yy = xx
// // xx = yy // error
// let xxx = (a: string, b: number, c?: number) => 0
// let yyy = (a: string, b?: number) => 0
// xxx = yyy
// let xxxx = (a: string, b: number, ...rest: number[]) => 0
// let yyyy = (x: string, y: number) => 0
// xxxx = yyyy
// enum Enum {
//   A,
//   B
// }
// let enumB: number = Enum.B
// let enumA: Enum = 0
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
// class Person {
//   name: string
//   constructor(name: string, age: number) {
//     this.name = name
//   }
// }
// let a = new Animal('animal')
// let p = new Person('person', 0)
// a = p
// p = a
var Animal = /** @class */ (function () {
    function Animal() {
        this.id = 0;
        this.name = 'animal';
    }
    return Animal;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        var _this = _super.call(this) || this;
        _this.name = 'person';
        return _this;
    }
    return Person;
}(Animal));
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'plant';
        this.id = 1;
    }
    return Plant;
}());
var a = new Person();
