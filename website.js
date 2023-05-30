var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200);
    res.write("welcome guys");
    res.end("thank you");
}).listen(8080);