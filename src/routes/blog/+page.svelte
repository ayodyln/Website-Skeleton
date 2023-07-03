<script lang="ts">
	import { onMount } from 'svelte'
	import type { Post } from '$lib/types/'
	import Logo from '../../components/UI/Logo.svelte'
	import PostCard from '../../components/UI/PostCard.svelte'

	export let data

	$: posts = data.posts as Post[]
	$: categories = [...new Set(posts.map((post: Post) => post.categories).flat())] as string[]
	$: activeTag = '' as string

	function filterHandler(tag: string) {
		if (activeTag === tag) {
			activeTag = ''
			return
		}
		activeTag = tag

		// libraryFilter = library.filter((post) => post.tags.includes(tag))
	}

	onMount(() => {
		console.log(posts)
	})
</script>

<svelte:head>
	<title>Dylan Smith - Blog</title>
	<meta
		name="description"
		content="Dylan Smith's blog for everything UI/UX design and application development, along with case studies and other posts."
	/>
</svelte:head>

<section class="mx-auto my-4 w-full max-w-5xl space-y-4">
	<div class="flex flex-wrap items-end gap-2">
		<Logo style="w-10 fill-current" />
		<h1 class="h1">Blog Posts</h1>
	</div>

	<div id="filter_bar" class="flex flex-wrap gap-2">
		{#each categories as category}
			<span
				class="chip {activeTag === category ? 'variant-filled' : 'variant-soft'}"
				on:click={() => filterHandler(category)}
				on:keypress>{category}</span
			>
		{/each}
	</div>

	<div id="posts" class="flex w-full flex-wrap gap-4">
		{#each posts as post, i}
			<PostCard {post} />
		{/each}
	</div>
</section>
