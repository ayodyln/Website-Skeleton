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

export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
