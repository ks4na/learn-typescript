// function identity(arg: number): number {
//   return arg
// }

function identity<AA>(arg: AA): AA{
  return arg
}

identity(123)
identity('string')
identity(true)