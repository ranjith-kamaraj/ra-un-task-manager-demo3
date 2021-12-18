const sgMail = require('@sendgrid/mail');
require('dotenv').config()

const {
    SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: SENDGRID_FROM_EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: SENDGRID_FROM_EMAIL,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}