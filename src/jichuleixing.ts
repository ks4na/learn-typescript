// boolean
let isDone: boolean = true

// number
let decLiteral: number = 6 // 十进制
let binaryLiteral: number = 0b1010 // 二进制， 0b 开头
let octalLiteral: number = 0o744 // 八进制， 0o 开头
let hexLiteral: number = 0xf // 十六进制， 0x 开头

// console.log(decLiteral, binaryLiteral, octalLiteral, hexLiteral)

// string
let myName: string = 'yuusha'
let sentence: string = `my name is ${myName}`

// console.log(sentence)

// 数组
let arr: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]

// console.log(arr, arr2)

// 元组tuple
let userInfo: [string, number] = ['yuusha', 25]
// userInfo = ['yuusha', 25]  // ok
// userInfo = [25, 'yuusha']  // Error

// console.log(userInfo)

// enum
enum Color{
  Red = 10,
  Green = 2, 
  Blue = 3
}
let c: Color = Color. Green

// console.log(c)

// any
// Object类似，但是只是可以赋给任意值，而不可以调用任意方法
let notSure: any = 4
// notSure.toFixed()  // ok, but compiler does not check
// notSure.ifItExists()  // ok, may have at runtime

let prettySure: Object = 4
// prettySure.toFixed()  // Error, Property 'toFixed' does not exist on type 'Object'

// void
// void 即 没有任何类型，用于函数没有返回值时
function printName(name: string): void {
  console.log(name)
}

// printName('yuusha')  

// void类型只能赋给它 null或者undefined，开启 --strictNullChecks 后只能赋值 undefined
let v: void = undefined
// v = null  // Error, Type 'null' is not assignable to type 'void'

// undefined 和 null
let u: undefined = undefined
let n: null = null

// never
function error(msg: string): never {
  throw new Error(msg)
}

// error('my error msg')

// 类型断言
// 写法1： (<type>val)
let str: Object = 'this is a string'
// let strLen: number = str.length  // roperty 'length' does not exist on type 'Object'
let strLen: number = (<string>str).length  // ok

// 写法2： (val as type)
let strLen2: number = (str as string).length