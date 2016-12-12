const add = (x, y) => {
  return x + y
}

add.bind(null, 1) // [Function]
add.bind(null, 1)(2) // 3
