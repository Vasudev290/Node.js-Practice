const fs = require('fs')

//Use case no 1 => Reading File
let fileData = ""
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err){
        throw err;
        return;
    };
    fileData = data;
    console.log("File Content :", data);
    
});

//Use case no 2 => write File

console.log(fileData);

fs.writeFile('output.txt', fileData, (err) => {
    if(err){
        console.log("Error writing to file");
        return;
    };
    console.log("Successfully wrote output...!");
});


//Use case no 3 => Make a direactory

fs.mkdir('myDireactory', (err) => {
    if(err){
        console.log("Error creating directory..! ");
        return;
    }
    console.log("Successfully created direactory");
    
})