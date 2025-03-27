const url = require('url')

const address = "https://www.youtube.com/watch?v=MY2Vxtfn5Tw&t=1015s";
const q = url.parse(address, true)
console.log(q.host)
console.log(q.hostname)
console.log(q.pathname)
console.log(q.search)