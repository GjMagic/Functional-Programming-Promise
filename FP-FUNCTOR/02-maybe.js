// maybe 函子
class MayBe {
  static of (value) {
    return new MayBe(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing () {
    return this._value === null || this._value === undefined
  }
}

/* let c = MayBe.of('hello world')
          .map(x => x.toUpperCase()) */

/* let c = MayBe.of(null)
          .map(x => x.toUpperCase()) */

let c = MayBe.of('null')
          .map(x => x.toUpperCase())
          .map(x => null)
          .map(x => x.split(' '))

console.log(c)

