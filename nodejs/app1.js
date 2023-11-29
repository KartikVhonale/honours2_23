// console.log("GoodMorning");

// function greeting(greet){
//     console.log(greet);
// }
// greeting("HelloWorld!");

// var http=require('http');
// http.createServer(function(req,res){
//     // res.writeHead(200,{'Content-Type':'text/html'});
//     // res.write('Good Morning');
//     // res.end();

//     res.writeHead(200,{
//         'Content-Type':'text/html'
//     })
//     .end('Good Afternoon')

// }).listen(8000);

// const http =require('http')
// const hostname='192.168.56.1';
// const port=3000;
// const server=http.createServer((req,res)=>
// {
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Good Night !');
// });
// server.listen(port,hostname,()=>{
//     console.log('Server started on port '+port);
// });

// const http =require('http')
// const fs=require('fs');
// const hostname='192.168.56.1';
// const port=3000;

// fs.readFile('index.html',(err,data)=>{
//     if(err)
//         throw(err);

// const server= http.createServer((req,res)=>{
//         res.statusCode=200;
//         res.setHeader('Content-Type','text-html');
//         res.write(data);
//         res.end();
//     });
// server.listen(port,hostname,()=>{
//     console.log('Server started on port '+port);
// });
// });

// var https=require('http');
// var fs=require('fs');
// https.createServer(function(req,res)
// {
//     // fs.readFile('index.html',function(err,data){
//         fs.readFile('text.txt',function(err,data){
//         if(err)
//         {
//             throw err;
//         }
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8000);
