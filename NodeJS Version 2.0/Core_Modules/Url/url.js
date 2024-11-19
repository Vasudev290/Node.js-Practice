const url = require('url')

const urlStr = "https://localhost.com/path?query=value#fregment";
const parseUrl = url.parse(urlStr, true);

console.log("Parsed URL Protocol :", parseUrl.protocol);
console.log("Parsed URL host :", parseUrl.host);
console.log("Parsed URL pathName :", parseUrl.pathname);
console.log("Parsed URL query :", parseUrl.query);
console.log("Parsed URL hash :", parseUrl.hash);

/* Parsed URL Protocol : https:
Parsed URL host : localhost.com
Parsed URL pathName : /path
Parsed URL query : [Object: null prototype] { query: 'value' }
Parsed URL hash : #fregment */