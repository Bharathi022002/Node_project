// var fs=require('fs')
// fs.readFile('demo.txt',function(err,data)
// {
//     console.log("Async data : ",data.toString());
// })
// var data=fs.readFileSync('demo.txt');
// console.log("Sync data : ",data.toString());
// fs.readFile('demo.txt',function(err,data)
// {
//     console.log("Async data : ",data.toString());
// })
// var data=fs.readFileSync('demo.txt');
// console.log("Sync data : ",data.toString());

var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('demo.txt',function(err,data){
        if(err){
            return console.log.error(err);
        }
        console.log("Async data : "+data)
        res.write(data);
        res.end();
    });
}).listen(8080);
