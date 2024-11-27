const path = require('path')

//Path Modules
console.log(path.dirname(__filename));  //D:\Vasu\Node.js-Practice\NodeJS Version 2.0\Core_Modules\OS
console.log(path.basename(__filename)) //one.js
console.log(path.basename(__dirname))  //OS


console.log(path.parse(__filename));
/*
{
  root: 'D:\\',
  dir: 'D:\\Vasu\\Node.js-Practice\\NodeJS Version 2.0\\Core_Modules\\OS',
  base: 'one.js',
  ext: '.js',
  name: 'one'
}
*/

console.log(path.parse(__dirname));
/*
{
  root: 'D:\\',
  dir: 'D:\\Vasu\\Node.js-Practice\\NodeJS Version 2.0\\Core_Modules',
  base: 'OS',
  ext: '',
  name: 'OS'
}
*/

