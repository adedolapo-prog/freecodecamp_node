const { readFile, writeFile } = require("fs")

readFile("./content/first.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    const first = data
    readFile("./content/second.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err)
      } else {
        const second = data
        writeFile(
          "./content/fourth.txt",
          `this is the result : ${first} & ${second}`,
          () => {
            console.log("done")
          }
        )
      }
    })
  }
})
