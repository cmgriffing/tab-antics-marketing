import dotenv from 'dotenv';
dotenv.config();

const { SENDGRID_API_KEY } = process.env;

import sgMail from '@sendgrid/mail';
sgMail.setApiKey(SENDGRID_API_KEY);

export async function post(request) {
	// const form = request.json();

	try {
		const form = JSON.parse(request.body);

		console.log({ form });
		const { name, email, message, occupation, title } = form;

		if (occupation !== '' || title !== 'Mr / Sir') {
			return {
				status: 400,
				body: ''
			};
		}

		const msg = {
			to: 'tabfoolery@outlook.com',
			from: 'no-reply@tabfoolery.com',
			dynamicTemplateData: {
				name,
				email,
				message
			},
			templateId: 'd-285a3f9f6a674722a0ccdb77a6cddf81'
		};

		const sendResponse = await sgMail.send(msg).catch((error) => {
			console.error('Error sending email', error);
		});
		return {
			status: 200,
			body: ''
		};
	} catch (e) {
		return {
			status: 400,
			body: ''
		};
	}
}
