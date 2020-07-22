// functor 函子
/* class Container {
  constructor (value) {
    this._value = value
  }

  map (fn) {
    return new Container(fn(this._value))
  }
}

const c = new Container(5)
  .map(x => x + 1)
  .map(x => x * x) */

class Container {
  static of (value) {
    return new Container(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return Container.of(fn(this._value))
  }
}

/* const c = Container.of(5)
  .map(x => x + 3)
  .map(x => x * x)

console.log(c) */

// 演示 null undefined 问题
Container.of(null)
  .map(x => x.toUpperCase())