<script lang="ts">
	import { format } from 'date-fns'

	export let mostRecent: any
</script>

<section class="h-96">
	{#if mostRecent}
		<a href={mostRecent.path}
			><div
				id="article_hero"
				class="bg-neutral max-h-96 h-full rounded-lg bg-cover bg-no-repeat bg-center shadow-lg max-w-5xl w-full mx-auto text-start relative"
				style={`background-image: url(${mostRecent.hero_image})`}
			>
				<span
					class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-neutral to-transparent h-60 flex justify-between items-end rounded-b-md text-white"
				>
					<div class="w-3/4">
						<div class="badge badge-sm badge-outline mb-2">Latest Post</div>
						<p class="text-3xl font-mono">{mostRecent.title}</p>
						<p class="font-mono">{format(new Date(mostRecent.publish_date), 'MMMM do, yyyy')}</p>
					</div>
				</span>
			</div></a
		>
	{:else}
		<div
			id="article_hero"
			class="bg-neutral h-96 rounded-lg bg-cover bg-no-repeat bg-center shadow-lg max-w-5xl w-full mx-auto mt-4"
			style={`background-image: url('')`}
		/>
	{/if}
</section>
