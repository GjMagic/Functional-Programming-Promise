// 函数组合  调试  NEVER SAY DIE never-say-die
const _ = require('lodash')

const trace = _.curry((key, val) => {
  console.log(key, val)
  return val
})

// _.split()
const split = _.curry((sep, str) => _.split(str, sep))
// _.toLower()
// _.join()
const join = _.curry((sep, arr) => _.join(arr, sep))
const map = _.curry((func, arr) => _.map(arr, func))

const f = _.flowRight(join('-'), trace('toLower'), map(_.toLower), trace('split'), split(' '))
console.log(f('NEVER SAY DIE'))