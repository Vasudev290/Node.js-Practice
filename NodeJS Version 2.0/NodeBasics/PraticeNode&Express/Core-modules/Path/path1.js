const path = require('path')

//Path Modules
console.log(path.dirname(__dirname))  //D:\Vasu\Node.js-Practice\NodeJS Version 2.0\NodeBasics\PraticeNode&Express\Core-modules
console.log(path.dirname(__filename));  //D:\Vasu\Node.js-Practice\NodeJS Version 2.0\NodeBasics\PraticeNode&Express\Core-modules\Path
console.log(path.basename(__filename)) //path1.js
console.log(path.basename(__dirname))  //Path
const p1 = path.parse(__dirname)
const p2 = path.parse(__filename)
console.log(p1)
console.log(p2)

console.log(path.parse(__filename));
/*
{
  root: 'D:\\',
  dir: 'D:\\Vasu\\Node.js-Practice\\NodeJS Version 2.0\\NodeBasics\\PraticeNode&Express\\Core-modules\\Path',
  base: 'path1.js',
  ext: '.js',
  name: 'path1'
}
*/

console.log(path.parse(__dirname));
/*
{
  root: 'D:\\',
  dir: 'D:\\Vasu\\Node.js-Practice\\NodeJS Version 2.0\\NodeBasics\\PraticeNode&Express\\Core-modules',
  base: 'Path',
  ext: '',
  name: 'Path'
}
*/

