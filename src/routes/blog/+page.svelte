<script lang="ts">
	import type { Post } from '$lib/Blog/library'
	import { onMount } from 'svelte'
	import { closestTo } from 'date-fns'
	import ArticleCard from '../../components/pages/blog/ArticleCard.svelte'
	import MostRecentPost from '../../components/pages/blog/MostRecentPost.svelte'

	export let data: any

	let library: any[] | Post[] = []
	let mostRecent: any

	onMount(() => {
		library = data.library
		const recentPost = closestTo(
			new Date(),
			library.map((post: any) => new Date(post.publish_date))
		)?.toISOString()
		mostRecent = library.find((post) => post.publish_date === recentPost)
		// console.log(mostRecent)
	})
</script>

<div class="mt-8">
	<MostRecentPost {mostRecent} />
</div>

<!-- Filter Section -->

<section class="max-w-5xl w-full m-auto h-full my-10">
	<div id="posts" class="flex flex-wrap w-full gap-4">
		{#if library.length === 0}
			{#each Array(4) as _}
				<div class="card w-[18rem] h-96 bg-base-100 shadow-xl animate-pulse overflow-hidden">
					<div class="bg-neutral h-56" style="background-image: url(/{''});" />

					<div class="card-body p-4">
						<h2 class="card-title bg-base-300 p-4"><span /></h2>
						<p class="bg-base-300 h-2 p-2"><span /></p>
					</div>
				</div>
			{/each}
		{:else}
			{#each library as post}
				{#if post.id !== mostRecent.id}
					<ArticleCard {post} />
				{/if}
			{/each}
		{/if}
	</div>
</section>
