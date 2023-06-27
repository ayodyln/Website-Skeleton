<script lang="ts">
	import Hero from '../components/pages/home/Hero.svelte'
	import DisplayWork from '../components/UI/DisplayWork/DisplayWork.svelte'
	import { onMount } from 'svelte'
	import type { Post } from '$lib/types'
	import PostCard from '../components/UI/PostCard.svelte'

	export let data

	$: posts = [] as Post[]

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	let featuredWork: any[] = []

	onMount(async () => {
		try {
			let work = await fetch('api/projects')
			let work_res = await work.json()
			featuredWork = work_res.filter((project: any) => project.tags.includes('Featured'))

			const postsReq = await fetch('api/posts')
			posts = await postsReq.json()
		} catch (error) {
			console.log(error)
		}

		const { data, error } = await supabase.from('countries').select()
		// console.log(data)
	})
</script>

<svelte:head>
	<title>Dylan Smith - Web Deisgn & App Development Portfolio</title>
	<meta
		name="description"
		content="Dylan Smith's portfolio, for UI/UX design and application developpment."
	/>
</svelte:head>

<section class="pb-10">
	<Hero />

	<section class="space-y-20">
		<div class="m-auto max-w-5xl">
			<section class="min-h-[835px]">
				<h2 class="h2 mb-8 font-mono opacity-50">Featured Work</h2>
				{#if featuredWork.length > 0}
					<DisplayWork work={featuredWork} />
				{:else}
					<ul class="space-y-4">
						{#each Array(3) as _, i}
							<div
								class="relative flex items-center {i % 2 === 0 ? 'justify-end' : 'justify-start'}"
							>
								<figure class="placeholder h-[409px] w-3/4 animate-pulse rounded-lg" />

								<div
									class="placeholder absolute h-4/5 w-2/4 animate-pulse space-y-2 rounded-xl p-4 backdrop-blur-lg {i %
										2 ===
									0
										? 'left-0'
										: 'right-0'}"
								>
									<div class="h-10 w-full bg-surface-900" />

									<ul>
										<li class="chip h-10 w-20 bg-surface-900" />
										<li class="chip h-10 w-20 bg-surface-900" />
									</ul>
								</div>
							</div>
						{/each}
					</ul>
				{/if}
			</section>
		</div>

		<div class="m-auto max-w-5xl">
			<section>
				<h2 class="h2 mb-8 font-mono opacity-50">Latest Posts</h2>

				<div id="posts" class="flex w-full flex-wrap gap-4">
					{#each posts as post, i}
						<PostCard {post} />
					{/each}
				</div>
			</section>
		</div>
	</section>
</section>
