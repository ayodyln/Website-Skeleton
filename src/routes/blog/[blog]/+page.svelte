<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import { TableOfContents } from '@skeletonlabs/skeleton'

	export let data

	$: readTimeVal = NaN

	function readTime() {
		if (browser) {
			const text = document.getElementById('blog_post')?.innerText
			const wpm = 225
			const words = text?.trim().split(/\s+/).length
			if (!words) return
			readTimeVal = Math.ceil(words / wpm)
		}
	}

	onMount(() => {
		readTime()
	})
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article id="blog_post" class="m-auto my-4 flex w-full max-w-5xl flex-col gap-4">
	<hgroup>
		<h1 class="h1 mb-2 font-mono font-bold tracking-wide">{data.meta.title}</h1>
		<div class="flex items-center justify-between">
			<span class="text-lg">
				{new Intl.DateTimeFormat('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}).format(new Date(data.meta.date))}

				{@html `&#x2014;`}

				{#if readTimeVal}
					{readTimeVal} Minute Read
				{/if}
			</span>

			<!-- Tags -->
			<span class="flex flex-wrap gap-2">
				{#each data.meta.categories as tag}
					<span class="badge variant-soft">{tag}</span>
				{/each}
			</span>
		</div>
	</hgroup>

	<!-- Article Hero -->
	<div
		id="article_hero"
		style={`background-image: url(${data.meta.hero_image});`}
		class="card h-96 w-full shadow-lg"
	/>

	<!-- Post -->
	<section class="relative flex w-full max-w-4xl gap-4">
		<div class="card sticky left-0 top-4 h-fit w-2/6 p-2">
			<TableOfContents target="#blog_post" width="w-full" label="Blog Content" text="truncate" />
		</div>

		<div id="md⬇️" class="w-5/6 space-y-4">
			<svelte:component this={data.content} />
		</div>
	</section>
</article>
