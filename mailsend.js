var nodemailer=require('nodemailer');

var sender = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "yourmailid",
        pass : "mailpassword"
    }
});

var composemail = {
    from : "sender mail id",
    to : "receiver mail id",
    subject : "reference",
    text : "hello world",
};

sender.sendMail(composemail,function(err,info){
    if(err){
        console.log("not found");
    }
    else{
        console.log("successfull" + info.response);
    }
});

