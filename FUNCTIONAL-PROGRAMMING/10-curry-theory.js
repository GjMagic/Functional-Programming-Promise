// 函数的柯里化-lodash

// const _ = require('lodash')

function getSum (a, b, c) {
  return a + b + c
}

// 柯里化函数源码
function curry (func) {
  return function curredFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curredFn(...args.concat(Array.from(arguments)))
      }
    }

    return func(...args)
  }
}

let curred = curry(getSum)

console.log(curred(1, 2, 3))
console.log(curred(1, 2)(3))
console.log(curred(1)(2, 3))
console.log(curred(1)(2)(3))
