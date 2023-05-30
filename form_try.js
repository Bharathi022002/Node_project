var http=require('http');
var fs=require('fs');
var formidable = require('formidable');

http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="biodata" method="post" enctype="multipart/form-data  >');
        res.write('Name:<input type="text" name="uname" /><br>');
        res.write('Name:<input type="text" name="uname" /><br>');
        res.write('DOB:<input type="date" name="dob" /><br>');
        res.write('Resume:<input type="file" name="resume" /><br>');
        res.write('<input  type="submit"/>');
    }
    else if(req.url=='/biodata'){
        var form= new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>Name:'+fields.uname+'</h1><br>');
            res.write('<h1>DOB:'+fields.dob+'</h1><br>');
            res.end('succesfull');
        })
    }
    else{
        res.end("404 error");
    }
}).listen(8080);