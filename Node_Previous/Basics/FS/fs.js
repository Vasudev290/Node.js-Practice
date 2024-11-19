const fs = require('fs')
let data = fs.readFileSync('data.txt','utf-8')
console.log(data);


const fs = require('fs')
let data = fs.readFile('data.txt','utf-8',(err, data)=>{
    if(err) throw err
    console.log(data);
})


