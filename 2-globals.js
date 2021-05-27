const interval = setInterval(() => {
  console.log("hello world")
}, 2000)

setTimeout(() => {
  console.log("done")
  process.exit(interval)
}, 10000)

//require
//module
//__dirname
//__filename
//process
