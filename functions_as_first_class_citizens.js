const identity = (x) => () => x

identity('Adam') // [Function]
identity('Adam')() // 'Adam'

const compose = (last, first) => (...args) => last(first(...args))
const add = (x, y) => x + y
const addAndLog = compose(console.log, add)

addAndLog(1, 2) // 3
