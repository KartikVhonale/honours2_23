// const fs = require('fs');
// const data = fs.readFileSync('abc.txt','utf-8'); // it blocks the other codes until we read the file
// console.log(data);
// console.log("blocking code");

// const fs = require('fs');
// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }); 
// console.log('non-blocking-code')

// const fs = require('fs');
// fs.readFile('new.html','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }); 
// console.log('non-blocking-code')

// const fs = require('fs');
// fs.readFile('new.html','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// }); 
// console.log('non-blocking-code')

//sync callback function
// function greetings(callback){
//     callback();
// }
// greetings(()=>{console.log('Hi');});
// console.log('Sync Callback')

//async callback non-blocking mode
//two files open one txt and one html

const fs = require('fs');
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
}); 
console.log("non-blocking code 1");
fs.readFile('new.html',(err,data)=>{
    if(err) throw err;
    console.log(data);
}); 
console.log("non-blocking code 2");

//append date in text file

