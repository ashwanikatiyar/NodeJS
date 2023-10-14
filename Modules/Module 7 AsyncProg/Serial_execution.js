/* Here we will see how we can run code asynchronously but in the sequence you want.
   Like here in this case we want to output of readFile in order of 1 , 2 and 3.
   So you just need to do 1 simple thing , make the last created code nested (function inside function).       */


const fs = require('fs')



console.log('Before ')


fs.readFile('file1.txt' , 'utf8' , cb1 =(err , data) => {
     if(err){
        console.log('There is an error ',err)
     }
     else{
        console.log(data)
     }

     fs.readFile('file2.txt' , 'utf8' , cb1 =(err , data) => {
        if(err){
           console.log('There is an error ',err)
        }
        else{
           console.log(data)
        }

        fs.readFile('file3.txt' , 'utf8' , cb1 =(err , data) => {
            if(err){
               console.log('There is an error ',err)
            }
            else{
               console.log(data)
            }
        })
     })
}) 



console.log("After  ")


    

