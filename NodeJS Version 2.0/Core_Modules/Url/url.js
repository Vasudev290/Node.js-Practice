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

//use case 2 => resolve a path

const baseUrl = "https://localhost.com/documnets";
const relativeUrl = "file.txt";

const finalUrl = url.resolve(baseUrl, relativeUrl);
console.log(finalUrl); //https://localhost.com/file.txt

//use case 3 => extract qurey parameter;

const query = "https://localhost.com/path?query=someValue&id=123";
const parseUrlQuery = url.parse(query, true);
console.log(parseUrlQuery.query);

const searchParams = new URLSearchParams(parseUrlQuery.query);
console.log(searchParams.get("query"));
console.log(searchParams.get("id"));

/* [Object: null prototype] { query: 'someValue', id: '123' }
someValue
123 */