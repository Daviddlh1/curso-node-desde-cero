// Esta es la forma de hacer una promesa los modulos que todavia no tienen promesas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo de forma asíncrona')
fs.readFile('./archivo.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })

console.log('Leyendo el primer archivo de forma asíncrona')
fs.readFile('./archivo2.txt', 'utf-8')
  .then((text) => {
    console.log(text)
  })
