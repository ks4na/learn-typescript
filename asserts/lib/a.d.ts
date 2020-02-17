declare const name = 'a.js'
declare const value = 'test import()'

declare function foo(name: string, age: number): void

declare namespace LibModuleA {
  const name: string
  const value: string
  function foo(name: string, age: number): void
}

export { name, value, foo }

export default LibModuleA
