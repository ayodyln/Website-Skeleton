import type { RequestHandler } from '@sveltejs/kit'
import { GitHub } from '$env/static/private'
import { json, error } from '@sveltejs/kit'

export const GET = (() => {
	return new Response('Hello, world!')
}) satisfies RequestHandler

async function getGitHubRepo() {
	try {
		const gh = await fetch(`https://api.github.com/users/ayodyln/repos`, {
			headers: {
				Authorization: `token ${GitHub}`
			}
		})
		const ghProjects = await gh.json()
		return ghProjects
	} catch (error) {
		console.error(error)
	}
}
