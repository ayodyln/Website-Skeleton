import { error, json } from '@sveltejs/kit'
import { library } from '$lib/Blog/library'
import { parseISO, compareDesc } from 'date-fns'

export function GET() {
	try {
		const posts = library.sort((a, b) => compareDesc(parseISO(a.publish_date), parseISO(b.publish_date))).slice(0, 5)
		return json(posts)
	} catch (e) {
		throw error(404, 'Not Found')
	}
}
