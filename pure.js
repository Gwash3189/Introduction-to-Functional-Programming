const names = Users.map((user) => user.name)

const printAllNames = (names) => {
  names.forEach(name => {
    console.log(name)
  })
}

printAllNames(names)
