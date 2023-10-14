const mongoose = require('mongoose')

mongoose.connect(`mongodb://127.0.0.1/testDB`)
.then(() => console.log('Connection Successful !! '))
.catch((err) => console.error('Couldnt connect mongodb ',err))


//Schema 

const courseSchema = new mongoose.Schema({
    name : String ,
    creator: String,
    publishDate : {type : Date , default: Date.now},
    isPublished : Boolean
})


const Course = mongoose.model('Course' ,courseSchema)

/*---------------------------------------------------------------------------------------------------------------------------------*/

// const course = new Course({
//     name : "JavaScript" ,
//     creator : 'Ashwani' , 
//     isPublished : true
// })
// course.save()

/*---------------------------------------------------------------------------------------------------------------------------------
The segmented portion of code can also be written in the following way and the mostly used                                         */

const createcourse = async () =>  {
    const course = new Course({
        name : "NodeJS" ,
        creator : 'Bhamya' , 
        isPublished : true
    })
    const result = await course.save()
    console.log(result)
}

createcourse()
 .then(() => mongoose.connection.close()) // Close the MongoDB connection
  .catch((error) => console.error('Error:', error));