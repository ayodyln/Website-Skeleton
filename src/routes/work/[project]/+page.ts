import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		// Update later to be put into a remote database
		const project = await import(`../../../projects/${params.project}.md`)
		return {
			content: project.default,
			meta: project.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.project}`)
	}
}
