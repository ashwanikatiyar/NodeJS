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


//Routes Parameters 
app.get('/course/:id' , (req , res) => {
    console.log(req.params.id) //Now if you type localhost3000/course/23 then you
                               //will get 23 as output in your terminal
    res.send(req.params.id)//This response will show you the output on browser
})


