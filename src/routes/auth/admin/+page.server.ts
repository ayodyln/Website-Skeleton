import { error, redirect } from '@sveltejs/kit'

export const load = async ({ fetch, locals: { supabase, getSession } }) => {
	const session = await getSession()

	if (!session) {
		console.log(error(401, 'Unauthorized'))
		throw redirect(302, '/')
	}

	if (session.user.user_metadata.role !== 'admin') {
		console.log(error(403, 'Forbidden'))
		throw redirect(302, '/')
	}
}
