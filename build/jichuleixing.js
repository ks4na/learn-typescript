"use strict";
// boolean
var isDone = true;
// number
var decLiteral = 6; // 十进制
var binaryLiteral = 10; // 二进制， 0b 开头
var octalLiteral = 484; // 八进制， 0o 开头
var hexLiteral = 0xf; // 十六进制， 0x 开头
// console.log(decLiteral, binaryLiteral, octalLiteral, hexLiteral)
// string
var myName = 'yuusha';
var sentence = "my name is " + myName;
// console.log(sentence)
// 数组
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
// console.log(arr, arr2)
// 元组tuple
var userInfo = ['yuusha', 25];
// userInfo = ['yuusha', 25]  // ok
// userInfo = [25, 'yuusha']  // Error
// console.log(userInfo)
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c)
// any
// Object类似，但是只是可以赋给任意值，而不可以调用任意方法
var notSure = 4;
// notSure.toFixed()  // ok, but compiler does not check
// notSure.ifItExists()  // ok, may have at runtime
var prettySure = 4;
// prettySure.toFixed()  // Error, Property 'toFixed' does not exist on type 'Object'
// void
// void 即 没有任何类型，用于函数没有返回值时
function printName(name) {
    console.log(name);
}
// printName('yuusha')  
// void类型只能赋给它 null或者undefined，开启 --strictNullChecks 后只能赋值 undefined
var v = undefined;
// v = null  // Error, Type 'null' is not assignable to type 'void'
// undefined 和 null
var u = undefined;
var n = null;
// never
function error(msg) {
    throw new Error(msg);
}
// error('my error msg')
// 类型断言
// 写法1： (<type>val)
var str = 'this is a string';
// let strLen: number = str.length  // roperty 'length' does not exist on type 'Object'
var strLen = str.length; // ok
// 写法2： (val as type)
var strLen2 = str.length;
