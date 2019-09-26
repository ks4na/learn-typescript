"use strict";
// function add(x: number, y: number): number {
//   return x + y
// }
// console.log(add(2, 3))
// let add2 = function(x: number, y: number): number {
//   return x + y
// }
// console.log(add2(2, 3))
// 完整的函数类型定义
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(2, 3));
// 自动类型推断
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
// 可选参数和默认参数
// 1. 可选参数
function printPerson(name, age) {
    return "Person:: name: " + name + ", age: " + age;
}
console.log(printPerson('yuusha', 24));
console.log(printPerson('ks4na'));
// 2. 默认参数
function printPerson2(name, age) {
    if (name === void 0) { name = 'defaultName'; }
    console.log("Person:: name: " + name + ", age: " + age);
}
printPerson2('yuusha2', 24);
printPerson2(undefined, 23);
// 剩余参数
function printNum(num) {
    var restNums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNums[_i - 1] = arguments[_i];
    }
    console.log(num);
    console.log(Array.isArray(restNums), restNums);
}
printNum(1);
printNum(1, 2, 3);
var printNumber = printNum;
printNumber = null;
// This 
var person = {
    age: 12,
    printAge: function () {
        var _this = this;
        return function () {
            console.log(_this.age);
        };
    }
};
person.printAge();
var per = {
    name: 'yuusha',
    age: 24,
    printInfo: function () {
        console.log(this.name, this.age);
    }
};
per.printInfo();
// let foo = per.printInfo
// foo()  // Error `this` not refer to a `UseThisDemo` object
var foo = per.printInfo.bind({ name: 'xyz', age: 123, printInfo: function () { } });
foo(); // OK, `this` refers to a `UseThisDemo` object
function getBirthYear(x) {
    if (typeof x === 'number') {
        return new Date().getFullYear() - x;
    }
    if (x instanceof Date) {
        return x.getFullYear();
    }
}
console.log(getBirthYear(24));
console.log(getBirthYear(new Date('1995-10-26')));
