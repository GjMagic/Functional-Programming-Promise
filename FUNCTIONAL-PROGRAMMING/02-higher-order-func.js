// 高阶函数-函数作为返回值

function makeFn() {
  let msg = 'Hello Func'
  return function() {
    console.log(msg)
  }
}

let fn = makeFn()
fn()
makeFn()()

// once
function once(fn) {
  let done = false
  return function() {
    if (!done) {
      done = true
      console.log(arguments)
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function(money) {
  console.log(`支付了：${money}RMB`)
})

pay(5)
pay(5)
pay(5)
pay(5)