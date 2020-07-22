// either 函子
class Left {
  static of (value) {
    return new Left(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return this
  }
}

class Right {
  static of (value) {
    return new Right(value)
  }

  constructor (value) {
    this._value = value
  }

  map (fn) {
    return Right.of(fn(this._value))
  }
}

function parseJSON (str) {
  try {
    return Right.of(JSON.parse(str))
            .map(x => x.name.toUpperCase())
  } catch (e) {
    return Left.of({ error: e.message })
  }
}

console.log(parseJSON('{ "name": "gj" }'))