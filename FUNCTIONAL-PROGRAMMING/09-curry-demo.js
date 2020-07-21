// 函数的柯里化-demo
/* console.log('john lee'.match(/\s+/g))
console.log('john 2lee'.match(/\d+/g)) */

const _ = require('lodash')

// ES5
/* const match = _.curry(function (reg, str) {
  return str.match(reg)
}) */

// ES6
const match = _.curry((reg, str) => str.match(reg)) // 柯里化

const haveSpace = match(/\s+/g)
const haveNum = match(/\d+/g)

/* console.log(haveSpace('John Lee'))
console.log(haveNum('Jo11hn Lee222')) */

// ES5
/* const filter = _.curry(function (func, arr) {
  return arr.filter(func)
}) */

// ES6
const filter = _.curry((func, arr) => arr.filter(func))

console.log(filter(haveSpace, ['John Lee', 'John_Lee']))

const findSpace = filter(haveSpace)
console.log(findSpace(['John Lee', 'John_Lee']))