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
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
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
    while (this.onFulfilled.length) this.onFulfilled.shift()()
  }

  reject = (reason) => {
    if (this.status !== PENDING) return;
    this.status = REJECTED
    this.reason = reason
    // this.onRejected && this.onRejected(this.reason)
    while (this.onRejected.length) this.onRejected.shift()()
  }

  then (onFulfilled, onRejected) {
    onFulfilled = onFulfilled ? onFulfilled : value => value;
    onRejected = onRejected ? onRejected : reason => reason;
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      } else {
        this.onFulfilled.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
        this.onRejected.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      }
    })
    return promise2
  }

  finally (callback) {
    return this.then((res) => {
      return Promise.resolve(callback()).then(() => res)
    }, (err) => {
      return Promise.resolve(callback()).then(() => err)
    })
  }

  catch (onRejected) {
    return this.then(undefined, onRejected)
  }

  static all (arr) {
    let result = []
    let index = 0

    return new Promise((resolve, reject) => {
      function addData (key, value) {
        result[key] = value
        index++
        if (index === arr.length) {
          resolve(result)
        }
      }

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element instanceof Promise) {
          element.then(res => addData(i, arr[i]), err => reject(err))
        } else {
          addData(i, arr[i])
        }
      }
    })
  }

  static resolve (value) {
    if (value instanceof Promise) return value

    return new Promise(resolve => resolve(value))
  }
}
