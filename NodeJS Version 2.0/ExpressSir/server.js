import express from 'express'
 const app = express()


 app.get('/create', (req, res) => {
    res.send("Create the New user from the List")
 })


 app.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server started and Running on Port : 8080`)
 })