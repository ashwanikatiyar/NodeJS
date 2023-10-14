const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('/', (req , res) =>{
    res.send('I am Ashwani and today is Wednesday')
})

app.get('/about', (req , res) => {
    res.send('I work in Digixito')
}) 

app.get('/contact' , (req , res) =>{
    res.send('My contact is 8542837123')
})


app.listen(port , () => console.log(`Port is running on ${port}`))



const courses = [
    {id : 1 , name : 'Python'},
    {id : 2 , name : 'JavaScript'},
    {id : 3 , name : 'NodeJS'}
]

app.get('/courses' , (req , res) => {
    res.send(courses)
})

//Routes Parameters 

app.get('/courses/:id', (req,res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Course not found'); // Return a 404 response if course is not found
    }
    res.send(course.name); // Send the course information in the response
    
});


