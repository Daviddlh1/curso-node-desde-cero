// Argumentos de entrada
// console.log(process.argv)

// Controlar el proceso y su salida
process.on('exit', () => {
  console.log('salí')
})
// Curret working directory
console.log(process.cwd())

console.log(process.env)

process.exit(1)
