const fs = require('fs')

//index 1
fs.readFile("one.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

//index 2
fs.writeFile("example.txt", 'utf8', (err) => {
    if(err){
        console.log(err)
    }
    console.log("File Created Successfully..!")
});

//index 3
const contentType = "Welcome to Node js "
fs.writeFile("example.html", contentType, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Data inserted successfully..!")
    }
});

//index 4 Rename
const contentType1 = "Welcome to Node js "
fs.rename("example.html", "newChange.txt", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Renamed the file name..!")
    }
});

//index 5 unlink formate (delete)
const contentType2 = "Welcome to Node js "
fs.unlink("newChange.txt", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File unlinked successfully..!")
    }
});