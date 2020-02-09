enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

// let a = Direction.Up
// console.log(a)  // 1

enum Enum {
  A
}

let a = Enum.A // a = 0
let nameOfA = Enum[a] // nameOfA = 'A'

console.log(a, nameOfA)

const enum Response {
  Ok = 200,
  NotFound = 404
}

let resArr: Response[] = [Response.Ok, Response.NotFound]

console.log(resArr)

export {}
