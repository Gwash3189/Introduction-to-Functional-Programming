const { curry } = require('ramda')

const add = (x, y) => x + y
const curriedAdd = curry(add)

curriedAdd(1) // [Function]
curriedAdd(1,2) // 3
