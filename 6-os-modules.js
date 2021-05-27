const os = require("os")

//info about the current user
const user = os.userInfo()

console.log(user.username)

//computer uptime in seconds
const uptime = os.uptime()

console.log(uptime)

//system info
const currentOs = {
  name: os.type(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOs)

const path = require("path")

const filename = path.basename(__filename)
console.log(filename)
