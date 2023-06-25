import type { Actions } from './$types'
import { error, fail, json, redirect, resolvePath, text } from '@sveltejs/kit'

export const actions: Actions = {
	adminLogin: async ({ fetch, request, cookies, locals: { supabase, getSession } }) => {
		const session = await getSession()

		if (!session) {
			console.log('no session')
		}

		const form = await request.formData()
		const body = Object.fromEntries(form.entries())

		const { data, error } = await supabase.auth.signInWithPassword({
			email: body.email.toString(),
			password: body.password.toString()
		})

		if (error) {
			return fail(500, {
				message: 'Server error. Try again later.',
				success: false,
				email: body.email.toString()
			})
		}

		throw redirect(303, '/auth/admin')
	}
}
