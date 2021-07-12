// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user:'parthsaliya86',
//         pass:'sph@8448'
//     }
// });

// var mailoption = {
//     from: 'parthsaliya86@gmail.com',
//     to: 'zitenterprise1806@gmail.com',
//     subject: 'Notification',
//     text: 'You have a post in your letterbox.'
// };

// transporter.sendMail(mailoption, function(error,info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('email sent');
//     }
// });
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     requireTLS: true,
//     auth: {
//       user: "parthsaliya86@gmail.com",
//       pass: "sph@8448",
//     },
//   });