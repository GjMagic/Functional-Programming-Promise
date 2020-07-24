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

  resolve = (value) => {
    if (this.status !== PENDING) return;
    this.status = FULFILLED
    this.value = value
  }

  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED
    this.reason = reason
  }

  then (onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.status === REJECTED) {
      onRejected(this.reason)
    }
  }
}

const promise = new Promise((resolve, reject) => {
  resolve('成功')
  reject('失败')
})

promise.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})