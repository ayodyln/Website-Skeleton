import { error } from '@sveltejs/kit'

export const load = ({ params, locals: { supabase, getSession } }) => {
	console.log(params)
	return {
		status: 200,
		body: {
			params
		}
	}
}
