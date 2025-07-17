let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bohli.donia@gmail.com',
    pass: 'motdepasse'
  }
});

let mailOptions = {
  from: 'bohli.donia@gmail.com',
  to: 'ibtihel.bensalah@outlook.fr',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});