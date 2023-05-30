var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.stat('demo.txt',function(err,stats){
        if(err){
            return console.log.error(err);
        }
        res.write("stats successfully");
        console.log(stats);
        res.write("Is this file : "+ stats.isFile());
        res.write("Is it direct : ",stats.isDirectory());
        res.end();
    })
}).listen(8080);