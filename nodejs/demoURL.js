var url=require('url');
var adr='https://localhost:8080/default.htm?year=2023&month=march';

var q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata=q.query;
console.log(qdata.year);