// flatten 数据扁平化算法
/* 法一： */
// ES5
var arr = [[1, [2, 3]],[4, 5], [6, 7, [8, 9]]];
function flatten1 (arr = []) {
  return arr.reduce((acc, cur) => {
    console.log(acc, cur)
    if (Array.isArray(cur)) {
      return [...acc, ...flatten1(cur)]
    } else {
      return [...acc, cur]
    }
  }, [])
}

// console.log(flatten1(arr))

// ES6
let flatten2 = (arr = []) => arr.reduce((acc, cur) => Array.isArray(cur) ? [...acc, ...flatten2(cur)] : [...acc, cur], [])

// console.log(flatten2(arr))

/* 法二： */
const type = (val) => Object.prototype.toString.call(val).slice(8, -1);

function flatten3 (arr) {
  let newArr = [];
  arr.forEach(val => {
    if (type(val) === 'Array') {
      newArr = newArr.concat(flatten3(val))
    } else {
      newArr.push(val)
    }
  });
  return newArr;
}

console.log(flatten3(arr))