const nodemailer = require('nodemailer');

// /mail is the endpoint of the this sendMail function

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with smtp server
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            // user: 'constantin18@ethereal.email',
            // pass: 'QpGk3nVTfsRHk6nT6f'
        }
    });

    let info = await transporter.sendMail({
        from: '"Rahul Shinde" <rahul@gmail.com>', // sender address
        to: "shinderahul8140@gmail.com", // list of receivers
        subject: "noreply@rahulshinde", // Subject line
        text: "This mail is sent through nodemailer...", // plain text body
        html: "<b>Hello, Recipient!</b>"
    })
    console.log("Message sent: %s", info.messageId);
    // res.json(info)
}

module.exports = sendMail;