const http = require('http');
const fs = require('fs');



//For http modules
http.createServer((req, res) => {
    // res.write('Hello World....!, Welcome to nod efam Vasu!')
    // res.write(req.url);
    // res.end()

    //Read
    // fs.readFile('test.txt' , (err, data) => {
    //     res.write(data)
    //     res.end()
    // })

    //create
    fs.writeFile('test.txt',"Please Devuda oka manchii timeline rayavayaaa...!",(err, data) => {
        res.write(data)
        res.end()
    });

    //Update
    // fs.appendFile('test.txt', "Thank You I'll Accept the Request -Murugan", (err, data) => {
    //     res.write(data);
    //     res.end()
    // })

    //Delete
    // fs.unlink('test.txt', (err) => {
    //     if(err) throw err;
    //     console.log("File Deleted Successfull..!")
    // })
    console.log("Server running Successfully..!")
}).listen(8080) 