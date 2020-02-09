// generics 泛型
function identity<T>(arg: T): T {
  return arg
}

console.log(identity<string>('13'))

console.log(identity('abc'))

// 泛型类型
let foo: <U>(arg: U) => U
foo = identity
// 泛型类型的对象字面量
let foo2: { <T>(arg: T): T } = foo

// 泛型接口
interface IdentityInterface {
  <T>(arg: T): T
}

let foo4: IdentityInterface = identity
console.log('foo4: ', foo4('xxx'))

// 带类型参数的泛型接口
interface GenericIdentityInterface<T> {
  (arg: T): T
}
let foo5: GenericIdentityInterface<number>
foo5 = identity

// 泛型类
class GenericNumber<T> {
  zeroValue?: T
  add?: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3)) // 3， 0 + 3

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function(x, y) {
  return x + y
}
console.log(stringNumeric.add(stringNumeric.zeroValue, 'abc')) // 'abc', '' + 'abc'

// 泛型约束
interface Lengthwise {
  length: number
}

function identity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
// identity1(3)  // Error, number doesn't have a .length property

identity1({ value: 3, length: 1 }) // OK

identity1<string>('123')

// 泛型约束中使用类型参数
class Animal {
  name: string = 'animal'
}

class Dog extends Animal {
  name: string = 'dog'
}

function isInstance<T, U extends T>(ins: U, c: new () => T): boolean {
  return ins instanceof c
}

console.log(isInstance<Animal, Dog>(new Dog(), Animal))

function getProperty<T, K extends keyof T>(obj: T, key: K): any {
  return obj[key]
}

let obj = {
  a: 1,
  b: 'string',
  c: true,
  d: null
}

getProperty(obj, 'b')
// getProperty(obj, 'm')  // Error

// 泛型中使用类类型
function createInstance<T>(c: new () => T): T {
  return new c()
}

interface Animal {
  name: string
}

class Cat implements Animal {
  name: string = 'cat'
}

class Mouse implements Animal {
  name: string = 'mouse'
}

function createInstance2<T extends Animal>(c: new () => T): T {
  return new c()
}

console.log(createInstance2(Cat).name)
console.log(createInstance2(Mouse).name)

class Page<T> {
  currentPage: number = 0
  pageSize: number = 5
  total: number = 0
  dataList: T[] = []

  constructor()
  constructor(
    currentPage: number,
    pageSize: number,
    total: number,
    dataList: T[]
  )
  constructor(
    currentPage?: number,
    pageSize?: number,
    total?: number,
    dataList?: T[]
  ) {
    this.currentPage = currentPage || this.currentPage
    this.pageSize = pageSize || this.pageSize
    this.total = total || this.total
    this.dataList = dataList || this.dataList
  }
}

let pagedAnimals = new Page<Animal>(1, 10, 200, [new Animal()])
pagedAnimals = new Page<Animal>()
console.log(pagedAnimals)

export {}
