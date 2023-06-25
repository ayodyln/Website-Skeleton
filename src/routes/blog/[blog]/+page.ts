import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		// Update later to be put into a remote database
		const post = await import(`../../../posts/${params.blog}.md`)
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.blog}`)
	}
}
