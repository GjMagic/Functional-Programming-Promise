// 模拟常用高阶函数: map、every、some

// map
const map = (arr, fn) => {
  let results = []
  for (const value of arr) {
    results.push(fn(value))
  }

  return results
}

let arr = [1, 3, 3, 7, 5]

arr = map(arr, v => v * v)
console.log(arr)

// every
const every = (arr, fn) => {
  let result = false
  for (const val of arr) {
    result = fn(val)
    if (!result) {
      break
    }
  }
  return result
}

const e = every(arr, v => v > 1)
console.log(e)

// some
const some = (arr, fn) => {
  let result = false
  for (const val of arr) {
    result = fn(val)
    if (result) {
      break
    }
  }
  return result
}

const r = some(arr, v => v % 2 === 0)
console.log(r)