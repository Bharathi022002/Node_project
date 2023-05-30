var mysql=require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Bharathi@123",
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("create database newdb",function(err,result){
        if(err) throw err;
        console.log("db created successfully");
    })
})