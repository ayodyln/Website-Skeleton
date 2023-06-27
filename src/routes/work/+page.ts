import { projects } from '$lib/Blog/library.js'

export const load = async ({ fetch }) => {
	try {

		return { projects }
	} catch (error) {
		console.log(error)
	}
}
