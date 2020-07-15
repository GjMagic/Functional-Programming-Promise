// 高阶函数-函数作为参数

// forEach
function forEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i])
  }
}

let arr = [1, 2, 3, 4, 5]

forEach(arr, function(item) {
  console.log(item)
})

// filter
function filter(arr, fn) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      results.push(arr[i])
    }
  }

  return results;
}

const r = filter(arr, function(item) {
  return item % 2 === 0
})

console.log(r)