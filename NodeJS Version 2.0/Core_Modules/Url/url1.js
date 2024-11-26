const url = require('url');

const urlStr = "https://localhost.com/path?query=value#fregment";
const parseUrl = url.parse(urlStr, true);

console.log(parseUrl.host);
console.log(parseUrl.pathname);
console.log(parseUrl.search);
