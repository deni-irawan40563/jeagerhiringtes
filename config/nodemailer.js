const nodemailer = require('nodemailer');

module.exports = {
  sendMail: function(email){
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      secure: false,
      requireTLS: true,
      port: '587',
      auth: {
        user: process.env.YOUREMAIL,
        pass: process.env.YOUREMAILPASS
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
  })

    const mailOptions = {
      from: `${process.env.YOURNAME} <${process.env.YOUREMAIL}>`,
      to: email,
      subject: 'Selamat datang',
      html:'<h1 style="text-align:center; font-size: 18px;">selamat datang, terimakasih sudah login di disini. <br> email ini hanya di kirim sekali ketika anda pertama kali sign up</h1>'
    }

    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
      }else{
        console.log(info, "\x1b[32m", "email send ... \n Successfully ✅");
      }
    })
  }
}