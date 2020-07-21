//模拟 lodash 中的函数组合方法 flowRight
// const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = str => str.toUpperCase()

// let last = _.flowRight(toUpper, first, reverse)

// ES5
/* function compose (...args) {
  return function (val) {
    return args.reverse().reduce(function (acc, cur) {
      return cur(acc)
    }, val)
  }
} */

// ES6
const compose = (...args) => val => args.reverse().reduce((acc, cur) => cur(acc), val)

let last = compose(toUpper, first, reverse)
console.log(last(['one', 'two', 'three']))
