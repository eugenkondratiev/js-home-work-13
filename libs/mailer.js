const mailer = require('./mail-connect');

const mailOptions = {
    from: 'ecoteploresurs@gmail.com',
    to: 'kondratiev.es@gmail.com',
    subject: 'Products base was changed'
    //text: 'That was easy!'
  };
  


function mailProducts(products, _mailOptions = mailOptions) {
    _mailOptions.text = JSON.stringify(products, null, ' ');

    mailer.sendMail(_mailOptions, function(error, info){
        if (error) {
          console.log("Mailing error\n", error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = mailProducts;