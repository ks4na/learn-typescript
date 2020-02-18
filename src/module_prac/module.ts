import { foo } from './moduleA'
import * as ModuleA from './moduleA'
// 导入具有副作用的模块
import '../../asserts/lib/globalVariable.js'

// 使用 import = 语法
import ZipCodeValidator = require('./ZipCodeValidator')

import { Observable } from './moduleA'
import '../declaration-merging'
const obs = new Observable([1, 2, 3]).map(item => item + '号')
console.log(obs)
console.log(new ZipCodeValidator().isAcceptable('12345'))

foo()

console.log(ModuleA)

export const regExp = /<.+?>/

export interface ExportInterface {
  name: string
  value: number
}

export class ExportClass {
  name: string = '12'
}

export { foo as Foo } from './moduleA'
export * from './moduleA'
