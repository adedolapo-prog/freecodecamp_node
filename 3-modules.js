//modules
//modules are encapsulated code - showing minimal information
const names = require("./4-names.js")
const sayHi = require("./5-utils.js")

// sayHi(names[0])
// sayHi(names[1])
// sayHi(names[2])

names.forEach((name) => {
  sayHi(name)
})
