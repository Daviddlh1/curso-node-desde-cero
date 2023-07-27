const http = require('node:http')
const fs = require('node:fs/promises')

const desiredPort = process.env.PORT ?? 1234

// Status codes
// 100 - 199: Respuestas informativas
// 200 - 299: Respuestas satisfactorias
//    - 200: OK
// 300 - 399: Redirecciones
//    - 301: Moved permanently
// 400 - 499: Errores del cliente
//    - 400: Bad Request
//    - 404: Not Found
// 500 - 599: Errores del servidor
//    - 500: Internal Server Error

const processRequest = (req, res) => {
  console.log('request received: ', req.url)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    fs.readFile('./images/image1.png')
      .then((data) => {
        res.setHeader('Content-type', 'image/png')
        res.end(data)
      })
      .catch(() => {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port ${desiredPort}`)
})
