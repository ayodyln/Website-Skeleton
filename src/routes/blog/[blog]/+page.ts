import { error } from '@sveltejs/kit'
import { library } from '$lib/Blog/library.js'

export const load = ({ params }) => {
	const blog = library.find((post) => {
		const path = post.path.split('/')
		if (path[path.length - 1] === params.blog) return post
	})

	if (blog) return blog

	throw error(404, 'Not found')
}
