<script lang="ts">
	import type { PageData } from './$types'
	import DisplayWork from '../../components/UI/DisplayWork/DisplayWork.svelte'
	import { techChip } from '../../components/UI/DisplayWork'
	import Logo from '../../components/UI/Logo.svelte'
	import type { Project } from '$lib/types'

	export let data: PageData
	$: projects = data.projects as Project[]
	$: favoriteProject = projects.find((project: any) => project.categories.includes('Favorite'))
	$: featured = projects.filter(
		(project: any) =>
			project.categories.includes('Featured') && !project.categories.includes('Favorite')
	)
	// $: console.log(favoriteProject)
</script>

<svelte:head>
	<title>Dylan Smith - Work</title>
	<meta name="description" content="Dylan Smith's UI/UX design and development work." />
</svelte:head>

<section id="projects" class="mx-auto my-4 flex w-full max-w-5xl flex-col gap-4">
	<div class="mb-4 flex flex-wrap items-end gap-2">
		<Logo style="w-10 fill-current" />
		<h1 class="h1">Projects</h1>
	</div>

	{#if favoriteProject}
		<a
			href="/work/{favoriteProject.title.replace(/\s+/g, '-').toLowerCase()}"
			id="favorite_project"
			class="card flex h-[380px] w-full rounded-lg bg-cover bg-center bg-no-repeat"
			style="background-image: url({favoriteProject.hero_image});"
		>
			<div
				class="left-0 top-0 flex w-full flex-col justify-end space-y-2 rounded-b-md bg-gradient-to-t from-surface-900 p-4"
			>
				<h2 class="h2 font-mono">{favoriteProject.title}</h2>
				<div class="space-x-2">
					{#each favoriteProject.tech as tech}
						{#if tech.toString() !== 'Favorite'}
							<span class="chip {techChip(tech.toString())}">
								{tech}
							</span>
						{/if}
					{/each}
				</div>
			</div>
		</a>
	{/if}

	<section id="featuredWork" class="mt-8 space-y-4">
		{#if featured}
			<DisplayWork work={featured} />
		{:else}
			<p>Loading...</p>
		{/if}
	</section>
</section>
