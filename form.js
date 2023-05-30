var http=require('http');
var fs=require('fs');
var formidable = require('formidable');

http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="biodata" enctype="multipart/form-data" method="post">');
        res.write('Name : <input type="text" name="uname"/><br>');
        res.write('D.O.B : <input type="date" name="dob"/><br>');
        res.write('Phone no : <input type="number" name="pno"/><br>');
        res.write('Your resume  : <input type="file" name="uploadfile"/><br>');
        res.write('<input type="submit"/>')
        res.end();
    }else if (req.url=='/biodata'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.write('Name : '+fields.uname+'</h1><br>');
            res.write('DOB : '+fields.dob+'</h1><br>');
            res.write('Phone no : '+fields.pno+'</h1><br>');

            var oldPath = files.uploadfile.filepath;
            var newPath = 'C:/Users/91934/OneDrive/'+files.uploadfile.name;
            fs.rename(oldPath,newPath,function(err){
                if(err) throw err;
                res.write('<h1>File location</h1>');
                res.write('<h1>Old path : '+oldPath+'</h1><br>');
                res.write('<h1>New path : '+newPath+'</h1><br>');
            })
        })
    }
    else{
        res.end("404 file not found");
    }
}).listen(8000);