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

// 可选参数和默认参数
// 1. 可选参数
function printPerson(name: string, age?: number): string {
	return `Person:: name: ${name}, age: ${age}`
}

console.log(printPerson('yuusha', 24))
console.log(printPerson('ks4na'))

// 2. 默认参数
function printPerson2(name = 'defaultName', age: number): void {
	console.log(`Person:: name: ${name}, age: ${age}`)
}

printPerson2('yuusha2', 24)
printPerson2(undefined, 23)

// 剩余参数
function printNum(num: number, ...restNums: number[]): void {
	console.log(num)
	console.log(Array.isArray(restNums), restNums)
}

printNum(1)

printNum(1,2,3)

let printNumber: ((a: number, ...rest: number[]) => void) | null = printNum
printNumber = null

// This 
// let person = {
	// age: 12,
	// printAge: function (){
		// return function (){
			// console.log(this.age)
		// }
	// }
// }

// person.printAge()

interface UseThisDemo {
	name: string
	age: number
	printInfo: (this: UseThisDemo) => void
}

let person: UseThisDemo = {
	name: 'yuusha',
	age: 24,
	printInfo: function (this: UseThisDemo){
		console.log(this.name, this.age)
	}
}

person.printInfo()
// let foo = person.printInfo
// foo()  // Error
let foo = person.printInfo.bind({name: 'xyz', age: 123, printInfo(){}})
foo()  // OK, `this` refers to an  `UseThisDemo` object


