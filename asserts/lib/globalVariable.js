const global_foo = function() {
  console.log('global_foo()')
}
console.log('in side-effect module : globalVariable.js')

global.global_foo = global_foo
