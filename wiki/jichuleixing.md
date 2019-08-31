# 基础类型

## 布尔值
```ts
let isDone: boolean = true
```

## 数字
```ts
let decLiteral: number = 6
let hexLiteral: number = 0xf
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
```

## 字符串
```ts
let myName: string = 'yuusha'
let sentence: string = `my name is: ${myName}`
```

## 数组
定义数组的方式有两种：  
1. 在类型后面接上 `[]`  
   ```ts
   let list: number[] = [1, 2, 3]
   ```  
2. 使用数组泛型 `Array<type>`  
   ```ts
   let list: Array<number> = [1, 2, 3]
   ```

## 元组Tuple
元组类型允许定义一个已知元素数量和类型的数组。  
```ts
// 声明一个元组类型
let x: [number, string]
// 初始化
x = ['hello', 21]  // ok
// 不正确的初始化
x = [12, 'hello']  // Error
```  

## 枚举
枚举类型 `enum` 是对 JavaScript 标准数据类型的补充。 使用枚举类型可以为一组数值赋予友好的名字。  
```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green  // 1
```  
默认情况下， 从 `0` 开始为元素编号，也可以手动指定元素的数值:  
```ts
enum Color { Red = 1, Green, Blue}
let c: Color = Color.Green  // 2
```  
或者，全部都采用手动赋值： 
```ts
enum Color{Red = 1, Green = 3， Blue = 5}
let c: Color = Color.Blue  // 5
```

## 任意值any
任意值 `any` 允许在编译阶段跳过类型检查，与 `Object` 类型类似，但是 `Object` 类型只是允许给它赋予任意值，却不可以调用任意方法，即使它真的有这些方法：  
```ts
let notSure: any = 4
notSure.ifItExists()  // 运行时可能存在该方法
notSure.toFixed()  // 确实存在，但是编译器并不检查

let prettySure: Object = 4
prettySure.toFixed()  // Error: toFixed 方法不存在于 Object 类型中
```  

## 空值void
`void` 类型像是与 `any` 类型相反，表示没有任何类型。 当一个函数没有返回值时使用。  
```ts
function warnUser(): void{
  alert('warning message')
}
```  
声明一个 `void` 类型没有大作用，只能为其赋予 `undefined` 或 `null` ：  
```ts
let unusable: void = undefined
unusable = null
```  
>  开启 `--strictNullChecks` 之后只能赋予 `undefined` 而不能赋予 `null` 。  

## null类型和undefined类型
`null` 类型和 `undefined` 类型和 `void` 类型相似，没有大作用：  
```ts
let u: undefined = undefined
let n: null = null
```  
默认情况下，`null` 和 `undefined` 是**所有类型的子类型**；  
但是当指定了 `--strictNullChecks` 之后，`undefined` 只能赋给 `void` 和它自身，而 `null` 只能赋给 `null`。这可以避免很多问题。  
> 推荐尽可能地使用 `--strictNullChecks` 。  

## never类型
`never` 类型表示那些永不存在的值。  
```ts
function error(message: string): never {
  throw new Error(message)
}
```  

## 类型断言
类型断言可以告诉编译器，程序员自己知道该值比现有类型更确切的类型（类似于其他语言的 `类型转换` ，但是不进行数据检查和解构，没有运行时的影响，只在编译阶段起作用）。  
类型断言有两种写法, 第一种使用尖括号语法：  
```ts
let val: any = 'this is a string'
let strLen: number = (<string>val).length
```  
另一种语法使用 `as` 关键字：  
```ts
let val: any = 'this is a string'
let strLen: number = (val as string).length
```  
> 两种形式等价，但是 JSX 语法中只允许 `as` 语法。  

