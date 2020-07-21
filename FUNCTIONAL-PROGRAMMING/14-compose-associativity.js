//函数组合要满足结合律
const _ = require('lodash')

// const last = _.flowRight(_.toUpper, _.first, _.reverse)
// const last = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)
const last = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse))

console.log(last(['one', 'two', 'three']))

