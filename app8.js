const fs = require('fs');
const data = fs.readFile('abc.txt','utf-8'); // it blocks the other codes until we read the file
console.log(data);
console.log('non-blocking-code')