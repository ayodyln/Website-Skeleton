export interface Article {
	id: number
	title: string
	html: string
	blurb: string
	summary: string
	tags: string[]
	tech: string[]
	image: string
	hero_image: string
	feature_image: string
	read_time: string
	url: string
	inserted_at: string
	updated_at: string
}

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Category[]
	published: boolean
	hero_image: string
	feature_image: string
}

interface ContactResponse {
	success: boolean | string
	errors: { email?: string; name?: string; message?: string; subject?: string }
}

type Project = {
	title: string
	slug: string
	description: string
	date: string
	categories: Category[]
	tech: string[]
	published: boolean
	hero_image: string
	feature_image: string
	github: string
}

enum Category {
	'SvelteKit',
	'Svelte',
	'JavaScript',
	'CSS',
	'HTML',
	'NodeJS',
	'ExpressJS',
	'TailwindCSS',
	'Rust',
	'NextJS',
	'Deno',
	'Project',
	'Blog',
	'Post',
	'Case Study',
	'Favorite'
}

export type { ContactResponse, Project }
