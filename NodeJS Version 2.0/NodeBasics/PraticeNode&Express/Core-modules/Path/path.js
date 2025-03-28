const path = require('path')

//Use case no 1 => join 2 paths

const basepath = "/home/multiple";
const subpath = "/userId/documents";

const fullpath = path.join(basepath,subpath)
console.log(fullpath);  //\home\multiple\userId\documents

//USE case no 2 -> Get file name

const filePath = "\home\multiple\documents/file.txt";
const fileName = path.basename(filePath)
console.log(fileName);  //file.txt


//Use case no 3 => Getting directory name

const filePath1 = "/home/user/document/file.txt";
const dirName = path.dirname(filePath1);
console.log(dirName);
///home/user/document

//Use case no 4 => Resolving path
const reletivepath = 'document/file.txt';

const absolutePath = path.resolve(basepath,reletivepath)
console.log(absolutePath);
//D:\home\multiple\document\file.txt