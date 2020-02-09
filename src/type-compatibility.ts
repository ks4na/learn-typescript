// // 结构类型系统介绍
// interface Named {
//   name: string
// }

// class Person {
//   name: string = 'person'
// }

// let p: Named
// p = new Person()

// // 对象兼容性判断
// let x: Person
// let y = { name: 'y', location: 'xxx' }
// x = y

// interface AnotherPerson {
//   name: string
//   age?: number
// }

// let z: AnotherPerson
// z = y

// function greet(n: Named) {
//   console.log('Hello, ', n.name)
// }

// greet(y)

// // 函数兼容性判断
// let foo1 = (a: number) => 0
// let foo2 = (a: number, b: string) => 0

// foo2 = foo1 // ok
// // foo1 = foo2 // Error

// let xx = () => ({ name: 'xx', age: 12 })
// let yy = () => ({ name: 'yy' })

// yy = xx
// // xx = yy // error

// let xxx = (a: string, b: number, c?: number) => 0
// let yyy = (a: string, b?: number) => 0
// xxx = yyy

// let xxxx = (a: string, b: number, ...rest: number[]) => 0
// let yyyy = (x: string, y: number) => 0

// xxxx = yyyy

// enum Enum {
//   A,
//   B
// }

// let enumB: number = Enum.B

// let enumA: Enum = 0

// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Person {
//   name: string
//   constructor(name: string, age: number) {
//     this.name = name
//   }
// }

// let a = new Animal('animal')
// let p = new Person('person', 0)

// a = p
// p = a

class Animal {
  protected id: number
  name: string
  constructor() {
    this.id = 0
    this.name = 'animal'
  }
}

class Person extends Animal {
  constructor() {
    super()
    this.name = 'person'
  }
}

class Plant {
  name: string
  protected id: number
  constructor() {
    this.name = 'plant'
    this.id = 1
  }
}

let a: Animal = new Person()
// let pl: Plant = new Person()

export {}
