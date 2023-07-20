const fs = require('node:fs')

console.log('Leyendo el primer archivo de forma asíncrona')
fs.readFile('./archivo.txt', 'utf-8', (err, textAsync) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(textAsync)
})

console.log('Leyendo el primer archivo de forma asíncrona')
fs.readFile('./archivo2.txt', 'utf-8', (err, textAsync) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(textAsync)
})
