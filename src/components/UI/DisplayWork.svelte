<script lang="ts">
	import type { Project } from '$lib/Blog/library';
	import { onMount } from 'svelte';
	import NoImage from './NoImage.svelte';

	export let work: Project[];
</script>

<ul class="w-full space-y-4">
	{#each work as project, i}
		<a
			href={project.path}
			data-sveltekit-preload-data="hover"
			class="block flex {i % 2 === 0 ? 'justify-end' : 'justify-start'} relative"
		>
			<figure class="w-2/3 overflow-hidden flex items-center justify-center">
				{#if project.hero_image}
					<img
						src={project.hero_image}
						alt={project.title}
						class="object-cover object-center w-full h-auto"
					/>
				{:else}
					<NoImage />
				{/if}
			</figure>

			<div class="bg-surface-800 absolute {i % 2 === 0 ? 'left-0 ' : 'right-0'} h-full w-1/3 p-2">
				<h2>{project.title}</h2>
			</div>
		</a>
	{/each}
</ul>
