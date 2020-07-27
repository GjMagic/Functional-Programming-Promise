let promiseFunc = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val)
    }, 10);
  })
}

let a = 'hello'

const promise = promiseFunc(a)

promise
  .then((res) => {
    let b = 'lagou'
    return promiseFunc(res + b)
  }).then(res => {
    let c = 'I ❤ U'
    return promiseFunc(res + c)
  }).then(res => {
    console.log(res)
  })