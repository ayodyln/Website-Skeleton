<script lang="ts">
	import { goto } from '$app/navigation'
	import { format } from 'date-fns'

	export let mostRecent: any[]

	function checkHeroID(id: number, direction: boolean) {
		if (direction) return id + 1
		if (!direction) return id - 1
	}
</script>

<div class="carousel rounded-box h-96 max-w-5xl w-full m-auto">
	{#each mostRecent as recent, i}
		<div id="slide{i}" class="carousel-item relative w-full bg-base-100">
			<img src={recent.hero_image} alt="Project Hero" class="h-full w-full" />

			<span
				class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-neutral to-transparent h-56 flex justify-between items-end text-white"
			>
				<div>
					{#if i === 0}
						<div class="badge badge-sm badge-outline mb-2">Latest Post</div>
					{/if}

					<p class="text-3xl font-mono">{recent.title}</p>

					<p class="font-mono">
						{format(new Date(recent.publish_date), 'MMMM do, yyyy')}
					</p>
				</div>

				<div>
					<button class="link" on:click={() => goto(recent.path)}>Read Article</button>
				</div>
			</span>

			<div class="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
				{#if i !== 0}
					<a href="#slide{checkHeroID(i, false)}" class="btn btn-circle absolute left-0">❮</a>
				{/if}

				{#if i !== mostRecent.length - 1}
					<a href="#slide{checkHeroID(i, true)}" class="btn btn-circle absolute right-0">❯</a>
				{/if}
			</div>
		</div>
	{/each}
</div>
