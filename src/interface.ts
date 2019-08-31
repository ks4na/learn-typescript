/**
 * 接口初探
 */
interface LabelledValue {
  label: string
}

function printLabel(lblObj: LabelledValue): void {
  console.log(lblObj.label)
}

printLabel({size: 20, label: 'size 20 label'} as LabelledValue)

/**
 * 可选属性 ?
 */

interface OptionalProp {
  label: string
  size?: number
}

let op1: OptionalProp = {label: 'optionalProp'}
let op2: OptionalProp = { label: 'op2', size: 21}

/**
 * 只读属性 readonly
 */
interface ReadonlyCircle {
  readonly pi: number
  radius: number
}

let rc: ReadonlyCircle = {pi: 3.14, radius: 5.0}
rc.radius = 10.0
// rc.pi = 3.1415926  // Error
 
/**
 * 额外的属性检查
 */
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  // ...
  return {color: 'red', area: 12}
}

let mySquare = createSquare({ colour: 'red', width: 20} as SquareConfig) 

/**
 * 函数类型
 */

interface SearchFunc {
  (source: string, subString: string): boolean
}

const mySearch: SearchFunc = (src, subStr) => {
  const result = src.search(subStr)
  return result > -1
}

/**
 * 类实现接口
 */
interface Person {
  name: string
  age: number
  showInfo(): void
}

class Student implements Person {

  name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }

  showInfo(): void {
    console.log(`Student:: name: ${this.name}, age: ${this.age}`)
  }
}

const stu = new Student('yuusha', 24)
stu.showInfo()

/**
 * 接口继承
 */

interface Shape {
  color: string
  label?: string
}

interface Square extends Shape {
  sideLength: number
}

let squ: Square = {color: 'red', sideLength: 20}

// 接口可以继承多个接口
interface PenStroke {
  penWidth: number
}

interface Circle extends Shape, PenStroke {
  radius: number
}

let cir: Circle = {} as Circle
cir.color = 'blue'
cir.penWidth = 4.0
cir.radius = 3.14
cir.label = 'circle'


