const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("home page")
    res.end()
  } else if (req.url == "/about") {
    res.write("about page")
    res.end()
  } else {
    res.end(`<h1>Ooops!!</h1>
    <p>Page not found</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000, () => {
  console.log("server is listening on port 5000")
})
