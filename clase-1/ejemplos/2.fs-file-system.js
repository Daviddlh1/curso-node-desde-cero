// a partir de node 16 se recomienda utiliza el prefijo node: para cualquier modulo de node
const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.birthtime
)
