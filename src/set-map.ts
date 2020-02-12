// Set  es6新增的数据结构，类似数组，但是键名与键值相同，所以不能有重复的值
let set = new Set()
;[1, 2, 2, 3, 2, 1].map(item => set.add(item))

for (let item of set) {
  console.log(item)
}

// Set()构造函数接受一个具有 iterable 接口的参数
let set2: Set<any> = new Set([1, 2, 3])
console.log(set2)

set2 = new Set('abc')
console.log(set2)

// Set()可以用于数组或者字符串去重
function dedupe(arg: any[] | string) {
  return [...new Set(arg)]
}
console.log(dedupe('aabacdcdd'))
console.log(dedupe([1, 1, 2, 3, 3, 2, 4]))

// Set中判断值是否相同，类似===，但是NaN只能加一次
let set3 = new Set()
set3.add(NaN)
set3.add(NaN)
console.log(set3)

let set4 = new Set()
set4.add({})
set4.add({})
console.log(set4)
console.log({} === {})

// Set实例的属性和方法: size, add(value), delete(value): boolean, has(value): boolean, clear()
let set5 = new Set([2, 3])
set5.add(1)
console.log(set5.size)
console.log(set5.delete(2))
console.log(set5.has(2))
set5.clear()
console.log(set5)

// Set实例的遍历方法 keys(), values(), entries(), forEach()
let set6 = new Set(['red', 'blue', 'green'])
for (const item of set6.keys()) {
  console.log(item) // red blue green
}

for (const item of set6.values()) {
  console.log(item) // red blue green
}

for (const item of set6.entries()) {
  console.log(item)
}
// [ 'red', 'red' ]
// [ 'blue', 'blue' ]
// [ 'green', 'green' ]

for (const item of set6) {
  console.log(item)
}

console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

set6.forEach((key, value) => {
  console.log(key, value)
})

// 遍历的应用
// 1. 数组去重
let set7 = new Set([1, 2, 3, 2, 3, 1])
let arr = [...set7]
console.log(arr) // [ 1, 2, 3 ]

// 2. 实现 并集，交集， 差集
let setOne = new Set([1, 2, 3])
let setTwo = new Set([4, 3, 2])

// 并集
let union = new Set([...setOne, ...setTwo])
// 交集
let intersect = new Set([...setOne].filter(item => setTwo.has(item)))
// 差集
let difference = new Set([...setOne].filter(item => !setTwo.has(item)))
console.log(union, intersect, difference)

// WeakSet
let ws = new WeakSet()
ws.add({})

let arr1 = ['a']
let arr2 = [1]
let ws1 = new WeakSet([arr1, arr2])
console.log(ws1.has(arr1), ws1.has(arr2))

const ws2 = new WeakSet()
const obj = {}
const foo = {}
const bar = {}

ws2.add(obj)
ws2.add(foo)

console.log(ws2.has(obj)) // true
console.log(ws2.has(bar)) // false

console.log(ws2.delete(obj)) // true
console.log(ws2.has(obj)) // false

// Map
let m = new Map()

let o = { o: 'abc' }
m.set(o, 'hello')
console.log(m.get(o)) // "hello"

// Map()接受一个参数
// type MapLike<K, V> = [K, V][]

const obj1 = { a: 'A' }
const arrA: [any, any][] = [
  [12, 'arrA'],
  ['name', 21],
  [obj1, obj1.toString()]
]

let m1 = new Map(arrA)
console.log(m1)

const setC = new Set(arrA)
let m2 = new Map(setC)
console.log(m2)

let m3 = new Map(m1)
console.log(m3)

// 同一个对象的引用，Map才视为同一个键
let m4 = new Map()
let obj2 = [1]

m4.set([1], 'A')
console.log(m4.get(obj2)) // undefined
m4.set(obj2, 'B')
console.log(m4.get(obj2)) // "B"

let map = new Map()
map.set(1, 'A').set('a', 2)
// console.log(map.size) // 2
// console.log(map.has(1)) // true
// console.log(map.get(1)) // "A"
// console.log(map.delete('a')) // true
// console.log(map) // Map { 1 => 'A' }
// map.clear()
// console.log(map) // Map {}

for (const key of map.keys()) {
  console.log(key) // 1 "a"
}

for (const value of map.values()) {
  console.log(value) // "A" 2
}

for (const item of map.entries()) {
  console.log(item[0] + ' -- ' + item[1])
}
// "1 -- A"
// "a -- 2"

console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries) // true

for (const item of map) {
  console.log(item[0], item[1])
}

map.forEach((value, key, map) => {
  console.log(key + ' -- ' + value)
})

map.clear()
map.set({}, 'A').set({}, 1)
console.log([...map])

let person = {
  name: 'yuusha',
  age: 26,
  child: {
    name: 'alice',
    age: 2
  }
}

// WeakMap

let wm = new WeakMap()
// wm.set(1, 1) // 错误
// wm.set(Symbol(), 1) // 错误
// wm.set(null, 1) // 错误
wm.set({}, 1) // ok

export {}
