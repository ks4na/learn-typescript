export const str: string = '123'

export function foo() {
  console.log('foo() from moduleA.ts')
}

export class Observable<T> {
  constructor(public values: T[]) {}
  // toString() {
  //   return this.values
  // }
}
