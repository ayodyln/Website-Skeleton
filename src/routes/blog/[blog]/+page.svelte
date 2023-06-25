<script lang="ts">
	import { TableOfContents } from '@skeletonlabs/skeleton'
	import { format } from 'date-fns'
	import { onMount } from 'svelte'

	export let data: any

	onMount(() => {
		console.log(data)
	})
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="m-auto my-4 flex w-full max-w-5xl flex-col gap-4 border">
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>

		<!-- Tags -->
	</hgroup>

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>

<!-- <section class="m-auto my-4 flex w-full flex-col gap-4">
	{#await data}
		<p>loading...</p>
	{:then blog}
		<section id="header" class="m-auto w-full max-w-5xl font-mono">
			<h1 class="text-info mb-1 text-4xl font-bold tracking-wide">
				{blog.title}
			</h1>
			<span class="tracking-wide text-current opacity-70">
				{format(new Date(blog.publish_date), 'MMMM do, yyyy')}
				{@html `&#x2014;`}
				{blog.read_time} minute read
			</span>
		</section>

		<div
			id="article_hero"
			class="bg-neutral bg-size-90 bg-fill m-auto h-96 w-full max-w-5xl rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
			style={`background-image: url(${blog.hero_image})`}
		/>

		<section class="relative m-auto flex w-full max-w-5xl gap-6">
			<div class="card variant-soft sticky top-4 h-fit min-w-[256px] p-2">
				<TableOfContents target="#content" />
			</div>

			<article id="content" class="w-full max-w-2xl space-y-6">
				<section id="synopsis" class="card p-2 italic">
					<p>{@html blog.summary}</p>
				</section>

				{@html blog.html}
			</article>
		</section>
	{/await}
</section> -->
