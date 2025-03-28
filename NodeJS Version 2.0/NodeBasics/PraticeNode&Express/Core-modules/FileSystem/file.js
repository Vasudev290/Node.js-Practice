const fs = require('fs')

//Read File
fs.readFile("text.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data)
});

//Create file;
fs.writeFile("example.txt", 'Hi guys i was created the new file..!', (err, data) => {
    if(err) throw err;
    console.log("file created successfull!")
});

//Rename file
fs.rename('example.txt', 'Ex.txt', (err) => {
    if(err){
        console.log(err);
    }
    console.log("Renamed Successfull!")
});

//Updated file
fs.appendFile("text.txt", "Thank You for staying and till the end..!", (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Inside Data Changed Successful...!")
    }
});

//Delete file
fs.unlink('Ex.txt', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File Deleted Successfull!")
    }
});