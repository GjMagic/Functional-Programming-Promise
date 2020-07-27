const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let maybe = Maybe.of([5, 6, 1])

// ex1
let ex1 = () => {
  return maybe.map(arr => {
    let getAddedNumArr = fp.map(fp.add(1))
    return getAddedNumArr(arr)
  })
}

console.log(ex1())

// ex2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])

let ex2 = () => {
  return xs.map(res => fp.first(res))._value
}
console.log(ex2())

// ex3
let safeProp = fp.curry((x, o) => Maybe.of(o[x]))
let user = { id: 2, name: 'Albert' }
let ex3 = () => {
  const safeUser = safeProp('name')
  return fp.first(safeUser(user)._value)
}
console.log(ex3())

// ex4
let ex4 = n => Maybe.of(n).map(res => parseInt(res))._value

console.log(ex4(2.1))