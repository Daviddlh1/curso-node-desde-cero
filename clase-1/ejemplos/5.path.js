const path = require('node:path')

// Barra separadora de carpetas segun OS
console.log(path.sep)

// Unir rutacon path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)
// Get the final extension
const extension = path.extname('my.super.image.jpg')
console.log(extension)
