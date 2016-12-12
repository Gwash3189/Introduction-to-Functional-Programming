const { curry, __ } = require('ramda')

const add = (x, y) => x + y
const reduce = curry((arr, func, initialValue) => arr.reduce(func, initialValue))
const toArr = (...arr) => arr

const bigAdd = compose(reduce(__, add, 0), toArr)

bigAdd(1, 2 ,3) // 6
