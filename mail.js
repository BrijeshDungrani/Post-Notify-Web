var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'parthsaliya86',
        pass:'sph@8448'
    }
});

var mailoption = {
    from: 'parthsaliya86@gmail.com',
    to: 'brijeshdungrani07@gmail.com',
    subject: 'Notification',
    text: 'Hello'
};

transporter.sendMail(mailoption, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('email sent');
    }
});
