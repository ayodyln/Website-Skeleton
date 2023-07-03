import { AWS_KEY, SECRET_AWS_KEY } from '$env/static/private'

import AWS from 'aws-sdk'

import { fail } from '@sveltejs/kit'

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

		const response: {
			success: boolean
			errors: { email?: string; name?: string; message?: string; subject?: string }
		} = {
			success: true,
			errors: {
				email: '',
				name: '',
				subject: '',
				message: ''
			}
		}

		if (!body.email) {
			response.success = false
			response.errors.email = 'Email is required'
		}
		if (!body.name) {
			response.success = false
			response.errors.name = 'Name is required'
		}
		if (!body.subject) {
			response.success = false
			response.errors.subject = 'Subject is required'
		}
		if (!body.message) {
			response.success = false
			response.errors.message = 'Message is required'
		}

		if (!response.success) return fail(400, response)

		const msg = `Name: ${body.name}\n\n ${body.message}`

		const params = {
			Destination: {
				ToAddresses: [`dylan.webdev@outlook.com`]
			},
			Message: {
				Body: {
					Html: {
						Charset: 'UTF-8',
						Data: msg
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: String(body.subject)
				}
			},
			Source: `${body.email}`
		}

		console.log(params)

		try {
			const result = await ses.sendEmail(params).promise()
			console.log(result)
			return { success: true }
		} catch (error) {
			console.error(error)
			return { success: false }
		}
	}
}
