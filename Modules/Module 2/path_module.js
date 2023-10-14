const path = require('path')

//For Finding out extention of any file

let extension = path.extname('C:\Users\ashuk\OneDrive\Desktop\java\Node.JS\Modules\calculator2.js')
console.log(extension)

let basename = path.basename('C:\Users\ashuk\OneDrive\Desktop\java\Node.JS\Modules\calculator2.js')
console.log(basename)


console.log(__filename)

console.log(__dirname)
