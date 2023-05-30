import { AWS_KEY, SECRET_AWS_KEY } from '$env/static/private'

import AWS from 'aws-sdk'

AWS.config.update({
	region: 'us-east-1',
	credentials: {
		accessKeyId: `${AWS_KEY}`,
		secretAccessKey: `${SECRET_AWS_KEY}`
	}
})

const ses = new AWS.SES()

export const actions = {
	contact: async ({ cookies, request }) => {
		const data = await request.formData()
		const body = Object.fromEntries(data.entries())

		const params = {
			Destination: {
				ToAddresses: [`dylan.webdev@outlook.com`]
			},
			Message: {
				Body: {
					Html: {
						Charset: 'UTF-8',
						Data: String(body.message)
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: String(body.subject)
				}
			},
			Source: `${body.email}`
		}

		try {
			const result = await ses.sendEmail(params).promise()
			console.log(result)
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}
}
