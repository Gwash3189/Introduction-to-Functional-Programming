cosnt arr = [1, 2, 3]

const bigAdd = () => {
  let total = 0

  arr.forEach(number => {
    total = number + total
  })

  return total
}
