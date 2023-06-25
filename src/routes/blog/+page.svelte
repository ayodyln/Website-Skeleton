<script lang="ts">
	import type { Post } from '$lib/Blog/library'
	import { onMount } from 'svelte'
	import { closestTo } from 'date-fns'
	import MostRecentPost from '../../components/pages/blog/MostRecentPost.svelte'
	import LatestPosts from '../../components/pages/home/LatestPosts.svelte'

	export let data: any

	let library: any[] | Post[] = []
	let mostRecent: any
	let filterTags: any[] = []
	let libraryFilter: any[] = []
	let activeTag: string = ''

	function filterHandler(tag: string) {
		if (activeTag === tag) {
			activeTag = ''
			libraryFilter = []
			return
		}

		activeTag = tag
		libraryFilter = library.filter((post) => post.tags.includes(tag))
	}

	onMount(() => {
		console.log(data)

		// library = data.library
		// const recentPost = closestTo(
		// 	new Date(),
		// 	library.map((post: any) => new Date(post.publish_date))
		// )?.toISOString()
		// mostRecent = library.find((post) => post.publish_date === recentPost)
		// filterTags = [...new Set(library.map((post) => post.tags).flat())]
	})
</script>


