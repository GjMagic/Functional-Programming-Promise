// IO Monad(解决函子嵌套的问题)
const fp = require('lodash/fp')
const fs = require('fs')
class IO {
  static of (value) {
    return new IO(function () {
      return value
    })
  }

  constructor (fn) {
    this._value = fn
  }

  map (fn) {
    return new IO(fp.flowRight(fn, this._value))
  }

  join () {
    return this._value()
  }

  flatMap (fn) {
    return this.map(fn).join()
  }
}

let readFile = filename => new IO(() => fs.readFileSync(filename, 'utf-8'))

let print = x => new IO(() => x)

let r = readFile('../package.json')
          .map(fp.toUpper)
          .flatMap(print)
          .join()

console.log(r)