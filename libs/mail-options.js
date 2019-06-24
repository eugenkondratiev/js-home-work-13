var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kondratiev.es@gmail.com',
    pass: 'yourpassword'
  }
});