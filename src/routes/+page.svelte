<script lang="ts">
	import Hero from '../components/pages/home/Hero.svelte'
	import DisplayWork from '../components/UI/DisplayWork.svelte'
	import { onMount } from 'svelte'
	import LatestPosts from '../components/pages/home/LatestPosts.svelte'

	let mostRecent: any[] = []
	let featuredWork: any[] = []

	onMount(async () => {
		try {
			let recent = await fetch('api/latest-posts')
			mostRecent = await recent.json()
			let work = await fetch('api/projects')
			let work_res = await work.json()
			featuredWork = work_res.filter((project: any) => project.tags.includes('Featured'))
			console.log(featuredWork)
		} catch (error) {
			console.log(error)
		}
	})
</script>

<section>
	<Hero />

	<section class="space-y-20">
		<div class="max-w-5xl m-auto">
			<section class="min-h-[835px]">
				<h2 class="h2 opacity-50 mb-8">Featured Work</h2>
				{#if featuredWork.length > 0}
					<DisplayWork work={featuredWork} />
				{:else}
					<ul class="space-y-4">
						{#each Array(3) as _, i}
							<div
								class="relative flex items-center {i % 2 === 0 ? 'justify-end' : 'justify-start'}"
							>
								<figure class="w-3/4 h-[409px] placeholder animate-pulse rounded-lg" />

								<div
									class="space-y-2 absolute w-2/4 h-4/5 placeholder animate-pulse backdrop-blur-lg rounded-xl p-4 {i %
										2 ===
									0
										? 'left-0'
										: 'right-0'}"
								>
									<div class="bg-surface-900 w-full h-10" />

									<ul>
										<li class="chip w-20 h-10 bg-surface-900" />
										<li class="chip w-20 h-10 bg-surface-900" />
									</ul>
								</div>
							</div>
						{/each}
					</ul>
				{/if}
			</section>
		</div>

		<div class="max-w-5xl m-auto">
			<section>
				<h2 class="h2 opacity-50 mb-8">Latest Posts</h2>
				{#if mostRecent.length > 0}
					<LatestPosts {mostRecent} />
				{:else}
					<ul class="flex w-full gap-4">
						{#each Array(3) as recent, i}
							<li class="w-1/3 h-96 placeholder rounded-lg animate-pulse" />
						{/each}
					</ul>
				{/if}
			</section>
		</div>
	</section>
</section>
