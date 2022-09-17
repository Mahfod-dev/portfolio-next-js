const sgMail = require('@sendgrid/mail');
require('dotenv').config();

export default async function sendEmailSendGrid(req, res) {
	const { message, email, name, textarea } = req.body;
	try {
		sgMail.setApiKey(process.env.API_KEY);
		const msg = {
			to: [`${email}`, 'md.techdevsup@gmail.com'], // Change to your recipient
			from: 'mahfod.dev@gmail.com', // Change to your verified sender
			subject: 'Message',
			text: `thanks ${name} your contact our services`,
			html: `<strong>Summary</strong>
					<p>Your message : ${message}</p>
					<p>Your description : ${textarea}</p>
					<p>We will contact you very soon</p>
					`,
		};
		const info = await sgMail.send(msg);
	} catch (error) {
		console.log(error);
	}
}
