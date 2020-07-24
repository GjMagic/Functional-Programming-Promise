/*
  1. Promise就是一个类，在执行这个类的时候需要传递一个执行器进去，执行器会立即执行
  2. Promise中有三种状态，分别为成功 fulfilled、失败 rejected、等待 pending
      pending -> fulfilled
      pending -> rejected
      一旦状态确定就不可更改
  3. resolve和reject函数是用来更改状态的
      resolve: fulfilled
      reject: rejected
  4. then方法内部做的事情就是判断状态，如果状态成功，调用成功回调，如果状态失败调用失败回调
  5. then成功回调有一个参数，表示成功后的值，then失败回调有个参数，表示失败后的原因
*/
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
  constructor (executor) {
    executor(this.resolve, this.reject)
  }

  status = PENDING

  value = undefined

  reason = undefined

  onFulfilled = []

  onRejected = []

  resolve = (value) => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED
    this.value = value
    // this.onFulfilled && this.onFulfilled(this.value)
    while (this.onFulfilled.length) this.onFulfilled.shift()(this.value)
  }

  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED
    this.reason = reason
    // this.onRejected && this.onRejected(this.reason)
    while (this.onRejected.length) this.onRejected.shift()(this.reason)
  }

  then (onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        let x =  onFulfilled(this.value)
        resolvePromise(x, resolve, reject)
      } else if (this.status === REJECTED) {
        onRejected(this.reason)
      } else {
        this.onFulfilled.push(onFulfilled)
        this.onRejected.push(onRejected)
      }
    })
    return promise2
  }
}

function resolvePromise (x, resolve, reject) {
  if (x instanceof Promise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

promiseObj = () => {
  return new Promise((resolve, reject) => {
    resolve('promiseObj')
  })
}

const promise = new Promise((resolve, reject) => {
  /* setTimeout(() => {
    resolve('成功')
  }, 2000); */
  resolve('成功')
  // reject('失败')
})

promise.then((res) => {
  console.log(res)
  return promiseObj()
}).then(res => {
  console.log(res)
})

/* promise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

promise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
}) */