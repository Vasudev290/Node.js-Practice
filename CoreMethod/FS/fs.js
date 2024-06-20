const fs = require("fs")

//Reading Synchronous
let data = fs.readFileSync("notes.txt", "utf-8")
console.log(data);

//Reading Asynchronous
fs.readFile("notes.txt", "utf-8",(err, Newdata)=>{
    console.log(Newdata);
});

//New Method
fs.readFile("notes.txt", "utf-8", (err, data)=>{
    fs.writeFile("one.txt", data, (err)=>{
        if (err) throw err
        console.log("Write working");
    })
})