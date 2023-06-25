import { error } from '@sveltejs/kit'
import { library } from '$lib/Blog/library.js'

export const load = async ({ params }) => {
	// const blog = library.find((post) => {
	// 	const path = post.path.split('/')
	// 	if (path[path.length - 1] === params.blog) return post
	// })

	// if (blog) return blog

	// throw error(404, 'Not found')

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
