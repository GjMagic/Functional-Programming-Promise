// monad-pre
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
}

let readFile = filename => new IO(() => fs.readFileSync(filename, 'utf-8'))

let print = x => new IO(() => {
  console.log(x)
  return x
})

let cat = fp.flowRight(print, readFile)

const c = cat('../package.json')._value()._value()
console.log(c)