class Human {
  name: string
  constructor(name: string ){
    this.name = name
  }
  greet():void {
    console.log(`hello, my name is ${this.name}`)
  }
}

let per1 = new Human('yuusha')
per1.greet()

// 类的继承
class Animal {
  name: string
  constructor(name: string){
    this.name = name
  }
  move(speed: number = 0): void {
    console.log(`${this.name} moves at speed: ${speed}`)
  }
}

class Horse extends Animal {
  legs: number
  constructor(name: string, legs: number){
    super(name)
    this.legs = legs
  }
  move(speed: number = 5): void {
    console.log('this horse is running...')
    super.move(speed)
  }
}

class Snake extends Animal {
  length: number
  constructor(name: string, length: number){
    super(name)
    this.length = length
  }
  move(speed: number = 3){
    console.log('this snake is running ...')
    super.move(speed)
  }
}

let horse: Horse = new Horse('HorseName', 4)
let snake: Animal = new Snake('SnakeName', 1)
horse.move()
snake.move()

// public , private, protected 修饰符
// class Animal1 {
//   public name: string
//   public constructor(name: string) {
//     this.name = name
//   }
//   public move(speed: number){
//     console.log(`${this.name} moves at speed ${speed}`)
//   }
// }

// new Animal1('dog').move(10)

// class Animal2 {
//   private name: string
//   constructor(name: string ) {
//     this.name = name
//   }
// }

// new Animal2('a').name  // Error

// class Animal3 {
//   protected name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// class Dog extends Animal3 {
//   constructor(name: string){
//     super(name)
//   }

//   showName(): void {
//     console.log(this.name)
//   }
// }

// new Dog('xyz').showName()

class HungrySingleton {
  private static instance: HungrySingleton = new HungrySingleton()
  public data: any
  private constructor(){
  }
  public static getInstance(): HungrySingleton {
    return HungrySingleton.instance
  }
}

const instance = HungrySingleton.getInstance()
const instance2 = HungrySingleton.getInstance()
instance.data = 123
console.log(instance.data)
instance2.data = 345
console.log(instance.data)

class Circle {
  readonly PI: number
  radius: number
  constructor(pi: number, radius: number){
    this.PI = pi
    this.radius = radius
  }
  getSquare():number {
    return this.PI * this.radius * this.radius
  }
}

const circle = new Circle(3.14, 20)
console.log(circle.getSquare())
circle.radius = 25
console.log(circle.getSquare())
// circle.PI = 3.1415926  // Error, readonly