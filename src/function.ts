// function add(x: number, y: number): number {
//   return x + y
// }

// console.log(add(2, 3))

// let add2 = function(x: number, y: number): number {
//   return x + y
// }

// console.log(add2(2, 3))

// 完整的函数类型定义
let myAdd: (baseVal: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}

console.log(myAdd(2, 3))

// 自动类型推断
let myAdd2 = function(x: number, y: number): number {
  return x + y
}

let myAdd3: (x: number, y: number) => number = function(x, y) {
  return x + y
}
