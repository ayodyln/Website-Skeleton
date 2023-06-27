import type { RequestHandler } from '@sveltejs/kit'
import { GitHub } from '$env/static/private'

export const GET = (async () => {
	return new Response(JSON.stringify(await getGitHubRepo()))
}) satisfies RequestHandler

async function getGitHubRepo() {
	try {
		const gh = await fetch(`https://api.github.com/users/ayodyln/repos`, {
			headers: {
				Authorization: `token ${GitHub}`
			}
		})
		const ghProjects = await gh.json()
		console.log(ghProjects)
		return ghProjects
	} catch (error) {
		console.error(error)
	}
}
