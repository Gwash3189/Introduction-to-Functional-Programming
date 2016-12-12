const { compose } = require('ramda')

const getAndPrintName = compose(printName, getName)

getAndPrintName({ name: 'Adam' })
