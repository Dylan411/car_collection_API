/* Importing the nodemailer module. */
const nodemailer = require('nodemailer')
require('dotenv').config()

/* Creating a transporter object that will be used to send emails. */
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

function mailDetails(code,email){
    return mail = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Password Reset',
        text: 'Hello your code is : ' + code
    }

}

module.exports = {transporter,mailDetails}