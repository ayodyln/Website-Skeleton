<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	export let data: any

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
		console.log(data)
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
	<!-- Title -->
	<hgroup>
		<h1 class="h1 mb-1 font-mono font-bold tracking-wide">{data.meta.title}</h1>
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
	</hgroup>

	<!-- Article Hero -->
	<div
		id="article_hero"
		style={`background-image: url(${data.meta.hero_image});`}
		class="card h-96 w-full"
	/>

	<!-- Post -->
	<div id="md⬇️">
		<svelte:component this={data.content} />
	</div>
</article>
