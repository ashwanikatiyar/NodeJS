const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req , res) =>{
    res.send('I am Ashwani and today is Sunday')
})

app.get('/about', (req , res) => {
    res.send('I work in Digixito')
}) 

app.get('/contact' , (req , res) =>{
    res.send('My contact is 8542837123')
})


app.listen(port , () => console.log(`Port is running on ${port}`))



let courses = [
    {id : 1 , name : 'Python'},
    {id : 2 , name : 'JavaScript'},
    {id : 3 , name : 'NodeJS'}
]


//Routes Parameters 
app.get('/courses/:id', (req,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course not found'); // Return a 404 response if course is not found
    }
    res.send(course.name); // Send the course information in the response
    
});
//----------------------------------------------------------------------------------------------------

app.get('/courses' , (req,res) => {
    res.send(courses)
})//This method is use to read data

//Now for using post method we also need to use a middleware which is a function
//that sits between the request and response objects in the application's 
//request-response cycle.This passes our data to json 

app.use(express.json())

//Now lets make Post method

app.post('/courses' , (req, res) => {
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course)
    res.send(course)
})//This method is used to create data

/*Here after run this http on Postman using POST request and then 
  in Body-> raw -> change Text to JSON , then type 
  {
    "name" : "DBMS"
  }
  and send the request */


app.put('/courses/:coursename' , (req,res) => {
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send("This course doesn't exist here")

    course.name = req.body.name
    res.send(course)
})//This method will Update your data



// app.delete('/courses/:coursename' , (req,res) => {
//     let Updatedcourses = courses.filter(course => course.name !== req.params.coursename)
//     courses = Updatedcourses
    
//     res.send(courses)
// })


app.delete('/courses/:id' , (req ,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course)res.status(404).send("This course does not exist here")

    let index = courses.indexOf(course)
    courses.splice(index , 1 )  // Syntax-> array.splice(startIndex, deleteCount, ...itemsToAdd);
    res.send(course)

})

/*---------------------------------------------------------------------------------------------------
 Middlewares --
 
 Middleware functions have access to the request and response objects,
 as well as the next middleware function in the sequence. They can 
 perform various tasks such as modifying request/response objects, 
 handling authentication, logging, error handling, and more. 
 Middleware allows you to modularize your code and separate concerns
 by breaking down the request-response cycle into smaller, reusable components.*/


 app.use(function ( req , res , next){
    console.log('I am custom middleware 1')
    next() /*If you dont use next() function your middleware will not move on next middleware(if any)
            or to the response. Basically the path is as follows
            (REQ)-->(MW1)--(MW2)-------(RES)
            
            So the next method passes the control to next middleware*/
 })

 app.use(function (req, res , next){
    console.log('I am custom middleware 2')
    next()
 })


 //Use morgan its a third party middleware


