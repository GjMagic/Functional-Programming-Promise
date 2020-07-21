// 函数的柯里化-lodash

const _ = require('lodash')

function getSum (a, b, c) {
  return a + b + c
}

let curred = _.curry(getSum)

console.log(curred(1, 2, 3))
console.log(curred(1, 2)(3))
console.log(curred(1)(2, 3))