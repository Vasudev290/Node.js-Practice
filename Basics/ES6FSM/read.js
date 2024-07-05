//Synchronous

import fs from 'fs'
let filecontent = fs.readFileSync('note.txt','utf-8')
console.log(filecontent);

//Asynchronous

import fs from 'fs'
fs.readFile('note.txt','utf-8',(err, data)=>{
    if(err)throw err
    console.log(data);
})
