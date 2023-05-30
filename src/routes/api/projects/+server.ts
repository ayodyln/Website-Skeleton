import { error, json } from '@sveltejs/kit'
import { projects } from '$lib/Blog/library'
import { parseISO, compareDesc } from 'date-fns'

export function GET() {
	try {
		const posts = projects.sort((a, b) => compareDesc(parseISO(a.publish_date), parseISO(b.publish_date)))

		return json(posts)
	} catch (e) {
		throw error(404, 'Not Found')
	}
}
