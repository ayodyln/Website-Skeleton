<script lang="ts">
	import { format } from 'date-fns'

	export let data: any
</script>

<section class="max-w-5xl w-full m-auto my-4 flex flex-col gap-4 p-2">
	{#await data}
		<p>loading...</p>
	{:then blog}
		<section id="header" class="font-mono">
			<h1 class="text-4xl font-bold tracking-wide mb-1 text-info">
				{blog.title}
			</h1>
			<span class="text-current opacity-70 tracking-wide">
				{format(new Date(blog.publish_date), 'MMMM do, yyyy')}
				{@html `&#x2014;`}
				{blog.read_time} minute read
			</span>
		</section>

		<div
			id="article_hero"
			class="bg-neutral rounded-lg h-96 bg-no-repeat bg-cover bg-size-90 bg-center bg-fill shadow-lg"
			style={`background-image: url(${blog.hero_image})`}
		/>

		<div id="content" class="space-y-6 max-w-2xl w-full m-auto">
			<section id="synopsis" class="rounded-lg italic font-medium bg-base-200 p-4 text-base-content">
				<p>{@html blog.summary}</p>
			</section>
			{@html blog.html}
		</div>
	{/await}
</section>
