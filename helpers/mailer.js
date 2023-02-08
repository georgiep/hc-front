let nodemailer = require('nodemailer');
require('dotenv').config()

const MAIL_USER  = process.env.MAIL_USERNAME
const MAIL_PASS  = process.env.MAIL_USERPASS
const MAIL_SMTP  = process.env.MAIL_SMTP

const port = process.env.PORT

let transport = {
    host: MAIL_SMTP,
    port: '587',
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
    },
    secure:false,
    tls: {rejectUnauthorized: false}

}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log("the error")
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

module.exports = transporter
