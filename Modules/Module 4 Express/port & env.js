const express = require('express')
const port = process.env.PORT || 3000// This gives you option to create dynamic port ,instead of static port



const app = express()

app.get('/', (req , res) =>{
    res.send('I am Ashwani and today is Wednesday')
})
app.get('/about', (req , res) => {
    res.send('I work in Digixito')
}) 



app.listen(port , () => console.log(`Port is running on ${port}`))//Here we used ${} which will insert
                                                                  //port dynamically


app.get('/contact' , (req , res) =>{
    res.send('My contact is 8542837123')
})