<script lang="ts">
	import type { Project } from '$lib/Blog/library';
	import { onMount } from 'svelte';
	import NoImage from './NoImage.svelte';

	export let work: Project[];

	onMount(() => {});
</script>

<ul class="">
	{#each work as project, i}
		<a href="/" class="block flex">
			<section id="workCardImage">
				{#if project.feature_image}
					<img src={project.feature_image} alt={project.title} class="h-full w-full" />
				{:else}
					<NoImage />
				{/if}
			</section>

			<div id="content" class="variant-ghost-surface">
				<div class="space-y-2">
					<h2 class="font-bold font-mono text-2xl">{project.title}</h2>

					<p class="">
						{project.blurb}
					</p>
				</div>
			</div>
		</a>
	{/each}
</ul>
