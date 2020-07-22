// lodash 和 lodash/fp模块中map方法的区别

const _ = require('lodash')
const fp = require('lodash/fp')

console.log(_.map(['23', '8', '10'], parseInt))
/* console.log(parseInt('23', 0, ['23', '8', '10']))
console.log(parseInt('8', 1, ['23', '8', '10']))
console.log(parseInt('10', 2, ['23', '8', '10'])) */

console.log(fp.map(parseInt)(['23', '8', '10']))
console.log(fp.map(parseInt, ['23', '8', '10']))