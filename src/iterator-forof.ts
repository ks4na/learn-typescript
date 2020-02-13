// 模拟 Iterator 机制
function generateIterator(arr: any[]) {
  let index = 0
  return {
    next() {
      if (index < arr.length) {
        const value = arr[index]
        index++
        return {
          value,
          done: false
        }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}

const gi = generateIterator([1, 3, 2])
console.log(gi.next()) // { value: 1, done: false }
console.log(gi.next()) // { value: 3, done: false }
console.log(gi.next()) // { value: 2, done: false }
console.log(gi.next()) // { value: undefined, done: true }
console.log(gi.next()) // { value: undefined, done: true }

// 原生可遍历的数据结构
let arr = [1, 2, 3]
let it = arr[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

type Gender = 'male' | 'female'

// 自己实现Iterable接口

class IterableDemo {
  constructor(public data: string[]) {}

  // [Symbol.iterator]() {
  //   let index = 0
  //   return {
  //     next: () => {
  //       if (index < this.data.length) {
  //         return {
  //           value: this.data[index++],
  //           done: false
  //         }
  //       } else {
  //         return {
  //           value: undefined,
  //           done: true
  //         }
  //       }
  //     }
  //   }
  // }

  *[Symbol.iterator]() {
    let index = 0
    while (index < this.data.length) {
      yield this.data[index++]
    }
  }
}

let iterableDemo = new IterableDemo(['a', 'b', 'c'])
for (const item of iterableDemo) {
  console.log(item) // a b c
}

let obj = {
  0: 'A',
  1: 'B',
  length: 2
}
;(obj as any)[Symbol.iterator] = Array.prototype[Symbol.iterator]

for (const item of obj as any) {
  console.log(item)
}

let str = 'ABC'
let itStr = str[Symbol.iterator]()
console.log(itStr.next()) // { value: 'A', done: false }
console.log(itStr.next()) // { value: 'B', done: false }
console.log(itStr.next()) // { value: 'C', done: false }
console.log(itStr.next()) // { value: undefined, done: true }

// 使用Iterator接口的场景
// 解构赋值
let [a, , b] = [1, 2, 3]
console.log(a, b) // 1 3

let [s, ...rest] = 'abcd'
console.log(s, rest) // a [ 'b', 'c', 'd' ]

// 拓展运算符
let arrx = [1, 2]
console.log([1, 2, ...arrx]) // [ 1, 2, 1, 2 ]

function* foo() {
  yield 'x'
  yield* [1, 2]
  yield 'y'
}
console.log([...foo()]) // [ 'x', 1, 2, 'y' ]

// iterator.return , iterator.throw
const iteratorReturnArr = [1, 3, 2, 3, 4, 5]
// const itr = iteratorReturnArr[Symbol.iterator]()
// iteratorReturnArr[Symbol.iterator] = () => {
//   itr.return = function() {
//     console.log('release memory')
//     return {
//       value: undefined,
//       done: true
//     }
//   }
//   return itr
// }
// for (const item of iteratorReturnArr) {
//   if (item % 2 === 0) {
//     throw new Error('even number')
//   }
//   console.log(item)
// }

// for...of可以与break，continue，return等配合使用

for (const item of iteratorReturnArr) {
  if (item % 2 === 0) {
    continue
  }
  console.log(item)
}

console.log('------')

for (const item of iteratorReturnArr) {
  if (item % 2 === 0) {
    break
  }
  console.log(item)
}

console.log('------')

function f() {
  for (const item of iteratorReturnArr) {
    if (item % 2 === 0) {
      return
    }
    console.log(item)
  }
}
f()
export {}
