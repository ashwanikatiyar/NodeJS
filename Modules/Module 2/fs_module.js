const fs = require('fs') //File systummm Module
const path = require('path')

//-----------------------------------------------------------------------------------------------------------------------------
//  Files Operations



//  reading a file

let filecontent= fs.readFileSync(path.join(__dirname,'file1.txt'))
console.log('Output: ' +filecontent)

  


//writing in a file

fs.writeFileSync(path.join(__dirname,'file2.txt') , `Text from fs module ,Hello , this is a testing`)
console.log('The given file has been modified')

  

//appending a file

fs.appendFileSync(path.join(__dirname,'file4.txt') , `\nAppended : Hello I am Appended text`)
console.log('Your file has been appended')

  

//deleting a file
fs.unlinkSync(path.join(__dirname , 'file5.txt'))
console.log('Your file has been deleted')

//-----------------------------------------------------------------------------------------------------------------------------
//Directory Operations

// make directory

fs.mkdirSync('make_directory')

let folderpath = 'C:\\Users\\ashuk\\OneDrive\\Desktop\\java\\Node.JS\\Modules\\make_directory'

let foldercontent= fs.readdirSync(folderpath)
console.log(foldercontent)

 //Check if given file exists or not
let doesExist = fs.existsSync('make_directory')
console.log(doesExist)

 //Remove/delete directory
fs.rmdirSync('make_directory') //this wont run if your directory isnt empty
console.log('You directory has been deleted')


