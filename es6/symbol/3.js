let a = Symbol.for('number')
let b = Symbol.for('number')
console.log(a === b)
console.log(a)

let c = Symbol()
console.log(Boolean(c) === true)