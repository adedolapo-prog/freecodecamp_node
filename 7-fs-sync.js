const { readFileSync, writeFileSync } = require("fs")

console.log("start here")
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

console.log(first, second)

console.log("in the middle")
const text = "hello, this is the third file"
writeFileSync("./content/third.txt", text)

console.log("done")
