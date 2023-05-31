<script lang="ts">
	import { format } from 'date-fns'

	export let post: any

	$: hoverState = false

	async function hoverHandler(e: any) {
		hoverState = !hoverState
	}
</script>

<a
	on:focus={hoverHandler}
	on:mouseenter={hoverHandler}
	on:mouseleave={hoverHandler}
	href={post.path}
	class="w-[18rem] h-fit bg-base-100 hover:shadow-2xl rounded-xl overflow-hidden group relative hover:ring"
>
	<div class="bg-neutral h-72 w-full bg-center bg-no-repeat bg-cover" style="background-image: url({post.image});" />

	<div
		class="p-2 h-24 transition-all ease-in duration-300 group-hover:h-full absolute bottom-0 left-0 bg-neutral/40 backdrop-blur-lg text-white"
	>
		<span class="h-fit w-full">
			<h2 class="text-lg font-bold font-mono">{post.title}</h2>
			<p class="font-mono">{format(new Date(post.publish_date), 'MMMM do, yyyy')}</p>
		</span>

		<span>
			<div class="divider m-0 my-2 before:bg-neutral-content after:bg-neutral-content" />
			<p>{post.blurb}</p>
		</span>

		<div class="mt-2 flex gap-2">
			{#each post.tags as tag}
				<span class="badge badge-outline">{tag}</span>
			{/each}
		</div>
	</div>
</a>
