//Synchronous
const fs = require('fs')
let data = fs.readFileSync('emp.txt','utf-8')
console.log(data);

//Asynchronous
const fs = require('fs')
let data1 = fs.readFile('emp.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data1);
})