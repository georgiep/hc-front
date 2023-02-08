const Express = require("express")
const server = Express.Router()
const Recaptcha = require('recaptcha-v2').Recaptcha

server.post('/send-email', (req, res) => {

    const recaptchaData = {
        remoteip: req.connection.remoteAddress,
        response: req.body.recaptcha,
        secret: process.env.RECAPTCHA_SECRET,
    };

    console.log(recaptchaData)

    const recaptcha = new Recaptcha(process.env.RECAPTCHA, process.env.RECAPTCHA_SECRET, recaptchaData);

    recaptcha.verify((success) => {

        if (success) {

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    key: process.env.MANDRILL_KEY,
                    message: {
                        text: req.body.message,
                        subject: req.body.subject,
                        from_email: 'test@studioha.gr',
                        from_name: req.body.name,
                        to: [
                            {
                                email: req.body.email,
                                name: req.body.name,
                            },
                        ],
                    },
                }),
            }

            fetch('https://mandrillapp.com/api/1.0/messages/send.json', requestOptions).then(
                async (response) => {
                    const res = await response.json()
                    console.log(res)
                }
            )

            return res.json({ mail: 'send' });

        }else{

            return  res.json({ mail: 'fail' });

        }
    })

});

module.exports = server