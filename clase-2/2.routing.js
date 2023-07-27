const http = require('node:http')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case 'pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          break
        default:
          console.log('default')
          break
      }
      break
    default:
      console.log('default')
      break
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log(`Listening on port ${server.address().port}`)
})
