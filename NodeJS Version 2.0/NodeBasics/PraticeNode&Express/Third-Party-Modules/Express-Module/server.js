import Express from 'express';
const app = Express()

app.get('/', (req, res) => {
    res.send("Hello Welcome to Node and Express js")
}).listen(5000, () => {
    console.log("Server Running Successfull...!")
})