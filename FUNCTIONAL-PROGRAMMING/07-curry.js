// 函数的柯里化

// ES5
/* function getArea (min) {
  return function (age) {
    return age > min
  }
} */

// ES6
const getArea = min => (age => age > min)

let getArea18 = getArea(18)
let getArea20 = getArea(20)

console.log(getArea18(20))
console.log(getArea18(24))