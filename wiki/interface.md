# interface 接口

## 介绍
接口的作用就是为值所具有的结构进行类型命名。  

## 接口初探
```ts
interface LabelledValue {
  label: string
}

function printLabel(labelObj: LabelledValue): void {
  console.log(labelObj.label)
}

let myObj = { label: 'size 10 object'}
printLabel(myObj)
```  
接口 `LabelledValue` 代表了有一个类型为 `string` 的 `label` 属性的对象。  
需要注意的是，实际上传入的对象可能会包含很多属性，传入多余的属性会报错，因为编译器并非只检查是否包含接口必需的属性以及属性的类型是否正确，详细原因见下方 [额外的属性检查](#额外的属性检查)。  

## 可选属性
可选属性的定义就是在属性名字定义后面加上一个 `?` 符号。  
```ts
interface SquareConfig {
  color?: string
  width?: number
}
```  

## 只读属性
只读属性只能在刚初始化的时候修改其值，之后再也不能更改。在属性名前面使用 `readonly`来指定只读属性：  
```ts
interface Point {
  readonly x: number
  readonly y: number
}

let pt1: Point = {x: 13, y: 12}
pt1.x = 14  // Error
```  

> `readonly` 和 `const` 的使用区别：  
>  `readonly` 用于修饰属性，而 `const` 用于修饰变量。  

## 额外的属性检查
```ts
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  // ...
}

let mySquare = createSquare({ colour: 'red', width: 20})  // error: 'colour' not expected in type 'SquareConfig'
```  
注意传入的参数中 `colour` 不是 `color`，在 `JavaScript` 里，这会默默忽略。但是 `TypeScript` 检测到对象字面量中存在有“目标类型”中不包含的属性时会报错。  
绕开这些额外的属性检查，最简单的解决办法是使用 `类型断言`：  
```ts
let mySquare = createSquare({ colour: 'red', width:20 } as SquareConfig )
```  
最佳的方法是使用 `索引签名` ，稍后章节会讲。  

> 你可能需要使用这些技巧来绕过额外的属性检查，但是大部分额外属性检查错误是真正的bug。  

## 函数类型
除了描述带有属性的普通对象外，接口也可以描述函数类型。  
```ts
interface SearchFunc {
  ( source: string, subString: string ): boolean
}
```  
像上面这样定义了函数类型的接口之后，就可以创建一个该函数类型的函数，并且可以不指定函数的参数类型，编译器会根据函数类型来推断出参数类型：  
```ts
let mySearch: SearchFunc
mySearch = function (src, subStr) {
  let result = src.search(subStr)
  return result > -1
}
```  
如上代码所示，可以不指定 `mySearch` 函数的入参、返回值的类型，编译器根据 `mySearch` 的函数类型 `SearchFunc` 自动推断， 并且 `mySearch` 函数的入参名不需要与函数类型 `SearchFunc` 中定义的一致。  

## 类类型（类实现接口）
与 `C#`、 `Java` 里的接口基本作用相同，可以使用接口来强制一个类符合某种契约，类使用 `implements` 实现接口。  
```ts
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
    console.log(`student::name: ${this.name}, age: ${this.age}`)
  }
}
```

## 接口继承
和类一样，接口也可以相互继承。接口继承使用 `extends`。  
```ts
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let squ = {} as Square
squ.color = 'red'
squ.sideLength = 20
```  
一个接口可以继承多个接口，使用逗号隔开。  
```ts
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Circle extends Shape, PenStroke {
  radius: number
}

let circle = {} as Circle
circle.color = 'red'
circle.penWidth = 5.0
circle.radius = 20
```