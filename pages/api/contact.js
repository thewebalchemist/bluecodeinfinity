export default function (req, res) {
    require('dotenv').config()
    
    const password = process.env.password;    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'bekokaunda@gmail.com',
            pass: password
        },
        secure: true,
    });

    const mailData = {
        from: 'bekokaunda@gmail.com',
        to: 'berackkaunda@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
        }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
        console.log(err)
        else
        console.log(info)
        res.end()
        })

        res.status(200)


    console.log(req.body)
}