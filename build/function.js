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
