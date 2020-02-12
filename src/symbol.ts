// Symbol()
let s = Symbol()
console.log(typeof s) // "symbol"

let sym1 = Symbol('foo')
let sym2 = Symbol('bar')

console.log(sym1) //  Symbol(foo)
console.log(sym2)

console.log(sym1.toString())
console.log(sym1.toString())

let s1 = Symbol()
let s2 = Symbol()

console.log(s1 === s2) // false

let s3 = Symbol('foo')
let s4 = Symbol('foo')

console.log(s3 === s4) // false

let sym = Symbol('sym')
let str = String(sym) //
console.log(str)
str = sym.toString() //
console.log(str)
console.log(Boolean(sym), !sym)

// Symbol值 作为属性名
const sym_name = Symbol('sym_name')
const sym_foo = Symbol('sym_foo')

let obj = {
  [sym_name]: 'symValue',
  [sym_foo]() {
    console.log('foo')
  }
}
console.log(obj[sym_name])
obj[sym_foo]()

// Symbol用于定义一组常量，保证各不相同
const COLOR_RED = Symbol()
const COLOR_GREEN = Symbol()

function getColor(color: symbol) {
  switch (color) {
    case COLOR_GREEN:
      return 'green'
    case COLOR_RED:
      return 'red'
    default:
      throw new Error('unknown color')
  }
}

// Symbol属性名无法被 for...in , for...of , Object.keys(), Object.getOwnPropertyNames(), JSON.stringify() 遍历，
// 遍历的方法是 Object.getOwnPropertySymbols()
const foo = Symbol('foo')

const obj1 = {} as any
obj1[foo] = 'bar'

console.log('========')
for (const key in obj1) {
  console.log(obj1)
}

console.log(Object.keys(obj1)) // []
console.log(Object.getOwnPropertyNames(obj1)) // []
console.log(JSON.stringify(obj1)) // "{}"

console.log(Object.getOwnPropertySymbols(obj1)) // [ Symbol(foo) ]

const symKey_name = Symbol('symKey_name')
class Animal {
  type: string;
  [symKey_name]: string
  constructor() {
    this.type = 'animal'
    this[symKey_name] = 'animal'
  }
}

// Symbol.for(str) 查找是否已有str为名称的Symbol值，有就返回该Symbol值，没有则新建并注册到全局环境以供搜索（注意:使用Symbol()创建的无法被Symbol.for()搜索到）

const sym_1: symbol = Symbol('sym_1')
const sym_2: symbol = Symbol.for('sym_2')
const sym_3: symbol = Symbol.for('sym_2')
const sym_4: symbol = Symbol.for('sym_1')

console.log(sym_1 === sym_2) // false
console.log(sym_2 === sym_3) // true

console.log(Symbol.keyFor(sym_1)) // undefined
console.log(Symbol.keyFor(sym_3)) // "sym_2"

const sym_5 = Symbol('sym_5')
const sym_6 = Symbol.for('sym_6')
const sym_7 = Symbol.for('sym_6')

// 内部Symbol值
// 1. Symbol.hasInstance
class Foo {
  static [Symbol.hasInstance](obj: any) {
    return obj instanceof String
  }
}
console.log(new String('123') instanceof Foo) // true
console.log([1, 2, 3] instanceof Foo) // false

// Symbol.isConcatSpreadable

// 数组
let arr: any = [1, 2]

console.log(arr[Symbol.isConcatSpreadable]) // 数组类型该属性值默认为 undefined, 可以展开
console.log([3, 4].concat(arr)) // [ 3, 4, 1, 2 ]

arr[Symbol.isConcatSpreadable] = false // 设置为false，不可以展开
console.log(arr[Symbol.isConcatSpreadable]) // false
console.log([3, 4].concat(arr)) // [ 3, 4, [ 1, 2 ] ]

// 类数组
let arrLike: any = { 0: 'a', 1: 'b', length: 2 }
console.log(arrLike[Symbol.isConcatSpreadable]) // 类数组默认不展开
console.log([3, 4].concat(arrLike)) // [ 3, 4, { '0': 'a', '1': 'b', length: 2 } ]

arrLike[Symbol.isConcatSpreadable] = true // 设置为 true， 可以展开
console.log(arrLike[Symbol.isConcatSpreadable]) // true
console.log([3, 4].concat(arrLike)) // [ 3, 4, 'a', 'b' ]

class ArrayLike<T> {
  [propName: number]: T
  length: number

  constructor(spreadable: boolean = false, ...args: T[]) {
    args.map((item, i) => {
      this[i] = item
    })
    this.length = args.length
    ;(this as any)[Symbol.isConcatSpreadable] = spreadable
  }
}

let arrayLike: any = new ArrayLike(true, 'A', 'B')
let arrayLike2: any = new ArrayLike(false, 3, 4)
console.log(([1, 2] as Array<any>).concat(arrayLike).concat(arrayLike2))

class A1 extends Array {
  constructor() {
    super()
    ;(this as any)[Symbol.isConcatSpreadable] = true
  }
}

class A2 extends Array {
  constructor() {
    super()
  }

  get [Symbol.isConcatSpreadable](): boolean {
    return false
  }
}

let a1 = new A1()
a1[0] = 'A'
a1[1] = 'B'

let a2 = new A2()
a2[0] = 3
a2[1] = 4

console.log([1, 2].concat(a1).concat(a2))

// Symbol.species
class MyArr<T> extends Array<T> {
  static get [Symbol.species]() {
    return Array
  }
}

let a = new MyArr(1, 2, 3)
let b = a.map(item => item)
let c = a.filter(item => item > 1)

console.log(b instanceof MyArr) // false
console.log(c instanceof Array) // true

// Symbol.match

class SymbolMatchDemo {
  [Symbol.match](str: string) {
    return str.indexOf('w')
  }
}

let ss = 'hello world'
console.log((ss as any).match(new SymbolMatchDemo())) // 6

// Symbol.replace

class SymbolReplaceDemo {
  [Symbol.replace](str: string, newStr: string) {
    console.log(str, newStr)
  }
}

;(ss as any).replace(new SymbolReplaceDemo(), 'xyz')

// Symbol.search

class SymbolSearchDemo {
  value: string = 'llo';
  [Symbol.search](str: string) {
    return str.indexOf(this.value)
  }
}

console.log(ss.search(new SymbolSearchDemo())) // 2

// Symbol.split
class SymbolSplitDemo {
  separator: string = 'aa';
  [Symbol.split](str: string) {
    let index: number = str.indexOf(this.separator)
    if (index === -1) {
      return str
    } else {
      return [
        str.substring(0, index),
        str.substring(index + this.separator.length)
      ]
    }
  }
}

console.log((ss as any).split(new SymbolSplitDemo()))

// Symbol.iterator

class SymbolIteratorDemo {
  *[Symbol.iterator]() {
    yield 'a'
    yield 'b'
    yield 'c'
  }
}

let retArr = []
for (const item of new SymbolIteratorDemo()) {
  retArr.push(item)
}
console.log(retArr) // [ 'a', 'b', 'c' ]

// Symbol.toPrimitive

class SymbolToPrimitiveDemo {
  constructor(public numValue: number, public strValue: string) {}

  [Symbol.toPrimitive](pattern: string) {
    switch (pattern) {
      case 'number':
        return this.numValue
      case 'string':
        return this.strValue
      case 'default':
        return 'default'
      default:
        throw new Error('unknown pattern')
    }
  }
}

const stpd = new SymbolToPrimitiveDemo(123, 'abc')
console.log(2 * (stpd as any)) // 246
console.log(2 + (stpd as any)) // "2default"
console.log('hello, ' + (stpd as any)) // "hello, default"
console.log(String(stpd)) // "abc"
console.log((stpd as any) == 'default') // true

// Symbol.toStringTag

class SymbolToStringTagDemo {
  get [Symbol.toStringTag]() {
    return 'SymbolToStringTag'
  }
}

console.log(new SymbolToStringTagDemo().toString())

// Symbol.unscopables
// 需要关闭严格模式

export {}
