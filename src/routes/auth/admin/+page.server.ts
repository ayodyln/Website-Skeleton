import { error, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession()

	if (!session) {
		console.log(error(401, 'Unauthorized'))
		throw redirect(302, '/')
	}
}
