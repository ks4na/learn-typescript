// 交叉类型 intersection types
function extend<T, U>(first: T, second: U): T & U {
  let ret = {} as any

  for (let key in first) {
    ret[key] = first[key]
  }

  for (let key in second) {
    if (!ret.hasOwnProperty(key)) {
      ret[key] = second[key]
    }
  }

  return <T & U>ret
}

class Square {
  name: string
  length: number
  constructor(length: number) {
    this.name = 'square'
    this.length = length
  }
}

class Circle {
  name: string
  pi: number
  radius: number
  constructor(radius: number) {
    this.name = 'circle'
    this.pi = 3.14
    this.radius = radius
  }
}

let squ = new Square(1)
let cir = new Circle(2)
let rectangle = extend(squ, cir)
console.log(rectangle)

let rect: Square & Circle = {
  name: 'rect',
  length: 1,
  pi: 2,
  radius: 12
}

// 联合类型 union types

function padLeft(str: string, padding: string | number) {
  if (typeof padding === 'string') {
    return padding + str
  } else {
    return new Array(padding + 1).join(' ') + str
  }
}

console.log(padLeft('abc', 4))
console.log(padLeft('abc', 'cba'))

interface Bird {
  eat(): void
  fly(): void
}

interface Fish {
  eat(): void
  swim(): void
}

function getRandomPet(): Bird | Fish {
  let eat = function(): void {
    console.log('eat')
  }
  let fly = function(): void {
    console.log('fly')
  }
  let swim = function(): void {
    console.log('swim')
  }
  let flag = Math.random() > 0.5
  if (flag) {
    let bird: Bird = { eat, fly }
    return bird
  } else {
    let fish: Fish = { eat, swim }
    return fish
  }
}

let pet: Bird | Fish = getRandomPet()

// if ((pet as Fish).swim) {
//   ;(pet as Fish).swim()
// } else {
//   ;(pet as Bird).fly()
// }

function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly() // TypeScript还能确定else分支中是Bird类型
}

// typeof类型保护
function isNotEmpty(arg: string | undefined | null): void {
  if (!arg) {
  } else {
    arg.length
  }
}

// instanceof 类型保护

class Dog {
  name: string
  bark: () => void
  constructor() {
    this.name = 'dog'
    this.bark = function() {
      console.log('wang wang')
    }
  }
}

class Cat {
  name: string
  climb: () => void
  constructor() {
    this.name = 'cat'
    this.climb = function() {
      console.log('climb')
    }
  }
}

function getPet2(): Dog | Cat {
  if (Math.random() < 0.5) {
    return new Dog()
  } else {
    return new Cat()
  }
}
let pet2: Dog | Cat = getPet2()

if (pet2 instanceof Dog) {
  pet2.bark()
} else {
  pet2.climb()
}

// null和undefined类型保护和类型断言

let s: string = '12'
// s = undefined  // error
// s = null  // error

let sn: string | null | undefined = '12'
sn = undefined // ok
sn = null // ok

// 可选属性和可选参数自动添加 | undefined
function f(x: number, y?: number) {
  return x + (y || 0)
}
console.log(f(1, 2))
console.log(f(1, undefined))

interface Optional {
  name?: string
}

let o: Optional = {
  name: 'o'
}
o.name = undefined

// null和undefined的类型保护
function checkType(arg: string | null | undefined) {
  if (arg === null) {
    console.log('null')
  } else if (arg === undefined) {
    console.log('undefined')
  } else {
    console.log('string')
  }
}

checkType('123')
checkType(null)
checkType(undefined)

function ff(s: string | undefined) {
  return s || 'default'
}

console.log(ff('12'))

// function getInitial(name?: string | null) {
//   name = name || 'Bob'
//   function upperCase() {
//     return name!.toUpperCase()
//   }
//   return upperCase().charAt(0)
// }

function getInitial(name?: string | null) {
  name = name || 'Bob'
  function upperCase() {
    return name!.toUpperCase()
  }
  return upperCase().charAt(0)
}

// 类型别名

interface Person {
  name: string
}
interface Serializable {
  serialize(): string
}

type SerializablePerson = Person & Serializable

let sp: SerializablePerson = {
  name: 'sp',
  serialize() {
    return 'serialized'
  }
}

type PersonOrSerializable = Person | Serializable
let pos: PersonOrSerializable = {
  serialize() {
    return 'pos'
  }
}

// 给对象字面量起别名
type Alias = {
  name: string
}

let a: Person = { name: 'a' }
let b: Alias = { name: 'b' }

// 给元组起别名
type BookInfo = [string, string, number]

let book: BookInfo = ['bookName', 'author', 12.4]

interface Person2 {
  name: string
  age: number
}
type MyString = keyof Person2
let str: MyString = 'age'

// 泛型形式的 类型别名
type Container<T> = { value: T }

// 类型别名 在属性中引用自己
type Node<T> = {
  value: T
  left: Node<T> | null
  right: Node<T> | null
}

let node: Node<number> = {
  value: 12,
  left: null,
  right: null
}

let leftNode: Node<number> = {
  value: 1,
  left: null,
  right: null
}

node.left = leftNode

console.log(node.left.value) // 1

// 类型别名 与 交叉类型 一起使用
type LinkedList<T> = T & { next: LinkedList<T> | null }
let first: LinkedList<Person> = {
  name: 'Alice',
  next: null
}

let second: LinkedList<Person> = {
  name: 'Bill',
  next: null
}

let third: LinkedList<Person> = {
  name: 'Cris',
  next: null
}

first.next = second
second.next = third

function printNameOfPeople(chain: LinkedList<Person> | null): void {
  if (chain) {
    console.log(chain.name)
    if (chain.next) {
      printNameOfPeople(chain.next)
    }
  }
}

printNameOfPeople(first)

// 接口和类型别名的区别
// 鼠标悬停在类型别名上显示的是对象字面量，而接口上显示的是接口名
type Aliass = { num: number }
interface Interface {
  num: number
}
declare function aliased(arg: Aliass): Aliass
declare function interfaced(arg: Interface): Interface

function identity<T>(arg: T): T {
  return arg
}

// 字符串字面量类型

type StringType = 'a' | 'b'

let st: StringType
st = 'a'
// st = 'c'  // Error

type ResponseStatus = 'Ok' | 'NotFound' | 'Forbidden'

function getStatusCode(status: ResponseStatus): number {
  // if (status === 'Ok') {
  //   return 200
  // } else if (status === 'NotFound') {
  //   return 404
  // } else if (status === 'Forbidden') {
  //   return 401
  // } else {
  //   throw new Error('unknown response status')
  // }

  switch (status) {
    case 'Ok':
      return 200
    case 'NotFound':
      return 404
    case 'Forbidden':
      return 401
    default:
      throw new Error('unknown response status')
  }
}

console.log(getStatusCode('Forbidden')) // 401
// console.log(getStatusCode('BadRequest')) // Error

// 可辨识联合

interface Sheep {
  kind: 'sheep'
  bleat(): void
}

interface Cat {
  kind: 'cat'
  mew(): void
}

interface Duck {
  kind: 'duck'
  quack(): void
}

type Animal = Duck | Sheep | Cat

function getSound(animal: Animal): void {
  switch (animal.kind) {
    case 'sheep':
      return animal.bleat()
    case 'cat':
      return animal.mew()
    case 'duck':
      return animal.quack()
    default:
      throw new Error('unknown animal')
  }
}

let ani: Sheep = {
  kind: 'sheep',
  bleat() {
    console.log('bleating')
  }
}

getSound(ani)

// this类型
// 可以用来实现链式调用
class Calculator {
  protected value: number
  constructor(value: number) {
    this.value = value
  }

  printValue(): void {
    console.log(this.value)
  }

  add(num: number): this {
    this.value += num
    return this
  }

  multiply(num: number): this {
    this.value *= num
    return this
  }
}

new Calculator(1)
  .add(2)
  .multiply(3)
  .printValue()

class ScientificCalculator extends Calculator {
  sin(): this {
    this.value = Math.sin(this.value)
    return this
  }
}

new ScientificCalculator(0)
  .sin()
  .add(2)
  .printValue()

// 索引类型

// javascript写法
// function pluck(obj: any, keys: any[]) {
//   return keys.map(key => obj[key])
// }

// typescript 写法
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

let obj = {
  name: 'obj',
  age: 12,
  male: false
}

console.log(pluck(obj, ['name', 'age']))

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getProperty(obj, 'male'))

interface Map<T> {
  [prop: string]: T
}

let keys: keyof Map<number> // keys 为 string 类型
let value: Map<number>['foo'] // value 为 number 类型

// 映射类型

interface Personx {
  name: string
  age: number
}

type PartialPersonx = {
  name?: string
  age?: number
}

type Partialx<T> = {
  [P in keyof T]?: T[P]
}

let x: Partialx<Personx> = {
  name: '12',
  age: 12
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

let y: Nullable<Personx> = {
  name: null,
  age: 12
}

// 将 T[P] 包装进 Proxy<T>
type Proxy<T> = {
  get(): T
  set(value: T): void
}

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}

function proxify<T>(obj: T): Proxify<T> {
  let newObj = {} as Proxify<T>
  for (const key in obj) {
    newObj[key] = getProxyValue(obj, key)
  }

  function getProxyValue<T, K extends keyof T>(obj: T, key: K): Proxy<T[K]> {
    let addProxyValue: Proxy<T[K]> = {
      get(): T[K] {
        return obj[key]
      },
      set(value): void {
        obj[key] = value
      }
    }
    return addProxyValue
  }

  return newObj as Proxify<T>
}

let person = {
  name: 'Alice',
  age: 21
}

let proxifiedPerson = proxify(person)
console.log(person)
console.log(proxifiedPerson)
proxifiedPerson.age.set(22)
console.log(person)
console.log(proxifiedPerson.age.get())

// 映射类型的拆包推断
function unproxify<T>(obj: Proxify<T>): T {
  let ret = {} as T
  for (const key in obj) {
    ret[key] = obj[key].get()
  }
  return ret
}

let originalPerson = unproxify(proxifiedPerson)
console.log(originalPerson)

export {}
