const names = Users.map((user) => user.name)

const printAllNames = () => {
  names.forEach(name => {
    console.log(name)
  })
}

printAllNames()
