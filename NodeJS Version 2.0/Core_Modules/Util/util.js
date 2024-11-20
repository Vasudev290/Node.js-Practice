const util = require('util')
const fs = require('fs')
const EventsEmi = require('events').EventEmitter
const readFileSync = util.promisify(fs.readFile);

//Util promisfy
readFileSync("example.txt", "utf-8")
  .then(data => console.log(data))
  .catch(err => console.log(err));

//format
const formatText = util.format('%s is %d tax holder', 'Vasu', 1000);
console.log(formatText);

//inspect
const obj = {name: 'Vasu', age: 23, Salary: 35000, email: 'vasu@gmail.com'}
const insepectObj = util.inspect(obj, {depth: null, colors: true});
console.log(insepectObj);
console.log(obj);

//util.inherit
function smsEmitter() {
    EventsEmi.call(this);
}
util.inherits(smsEmitter, EventsEmi);

const mysmsEmitter = new smsEmitter();
mysmsEmitter.on("customEvents", () => {console.log("custom event called")})

mysmsEmitter.emit("customEvent");