const { createServer } = require('http')

const server = createServer((req, res) => {
  res.end('hello')
}).listen(3000, () => {
  console.log(`the server is listening ${server.address().port}`)
})
