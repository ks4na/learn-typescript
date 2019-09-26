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
let person = {
	age: 12,
	printAge: function (){
		return () => {
			console.log(this.age)
		}
	}
}

person.printAge()

// this作为参数
interface UseThisDemo {
	name: string
	age: number
	printInfo: (this: UseThisDemo) => void
}

let per: UseThisDemo = {
	name: 'yuusha',
	age: 24,
	printInfo: function (this: UseThisDemo){
		console.log(this.name, this.age)
	}
}

per.printInfo()
// let foo = per.printInfo
// foo()  // Error `this` not refer to a `UseThisDemo` object
let foo = per.printInfo.bind({name: 'xyz', age: 123, printInfo(){}})
foo()  // OK, `this` refers to a `UseThisDemo` object

// 重载
function getBirthYear(age: number): number
function getBirthYear(date: Date): number
function getBirthYear(x: any){
	if(typeof x === 'number'){
		return new Date().getFullYear() - x
	}
	if(x instanceof Date){
		return x.getFullYear()
	}
}

console.log(getBirthYear(24))
console.log(getBirthYear(new Date('1995-10-26')))