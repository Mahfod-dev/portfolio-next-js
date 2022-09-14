const sgMail = require('@sendgrid/mail');
require('dotenv').config();

console.log(process.env.API_KEY);

// export default async function sendEmail(req, res) {
// 	let testAccount = await nodemailer.createTestAccount();

// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.mandrillapp.com',
// 		port: 587,
// 		secure: false, // true for 465, false for other ports
// 		auth: {
// 			user: 'mahfod.dev', // generated ethereal user
// 			pass: 'EMKT29lhtEbbtx0UQrhr2w', // generated ethereal password
// 		},
// 	});
// 	let info = await transporter.sendMail({
// 		from: '"mahfod" <mahfod.dev@gmail.com>', // sender address
// 		to: 'karimbelha69200@gmail.com', // list of receivers
// 		subject: 'Hello ✔', // Subject line
// 		text: 'Hello world?', // plain text body
// 		html: '<b>Hello world?</b>', // html body
// 	});
// 	res.send(info)
// }

// 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;
// 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;

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
		res.json(info);
	} catch (error) {
		console.log(error);
	}
}
