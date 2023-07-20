import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo de forma asíncrona')
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text)

console.log('Leyendo el primer archivo de forma asíncrona')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log(text2)
