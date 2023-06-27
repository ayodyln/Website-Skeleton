<script lang="ts">
	import type { PageData } from './$types'
	import { onMount } from 'svelte'
	import DisplayWork from '../../components/UI/DisplayWork/DisplayWork.svelte'
	import { techChip } from '../../components/UI/DisplayWork'
	import Logo from '../../components/UI/Logo.svelte'
	let starredProject: any
	let featured: any[]

	export let data: PageData

	onMount(async () => {
		const projects: any = data.projects
		starredProject = projects.find((post: { tags: any[] }) =>
			post.tags.find((tag: any) => tag === 'Star')
		)
		featured = projects.filter(
			(project: { tags: string | string[]; id: any }) =>
				project.tags.includes('Featured') && project.id !== starredProject.id
		)
	})
</script>

<svelte:head>
	<title>Dylan Smith - Work</title>
	<meta
		name="description"
		content="Dylan Smith's UI/UX design and development work."
	/>
</svelte:head>

<section id="projects" class="mx-auto my-4 flex w-full max-w-5xl flex-col gap-4">
	<div class="flex flex-wrap items-end gap-2">
		<Logo style="w-10 fill-current" />
		<h1 class="h1">Projects</h1>
	</div>

	{#if starredProject}
		<a href={starredProject.path}>
			<div
				id="article_hero"
				class="bg-neutral relative mx-auto h-96 rounded-lg bg-cover bg-center bg-no-repeat text-start shadow-lg"
				style={`background-image: url(${starredProject.hero_image}); background-position: right;`}
			>
				<span
					class="absolute bottom-0 left-0 flex h-60 w-full items-end justify-between rounded-b-md bg-gradient-to-t from-surface-900 to-transparent p-4 text-white"
				>
					<div class="w-3/4 space-y-1">
						<div
							class="badge-sm badge-outline badge variant-gradient-warning-error mb-2 bg-gradient-to-br"
						>
							Featured Project
						</div>
						<h2 class="font-mono text-3xl">{starredProject.title}</h2>
						<ul class="space-x-2">
							{#each starredProject.tech as tech}
								<a href={tech.URI} target="_blank" class="chip {techChip(tech.name)}">{tech.name}</a
								>
							{/each}
						</ul>
					</div>
				</span>
			</div>
		</a>
	{:else}
		<div
			id="article_hero"
			class="bg-neutral mx-auto h-full w-full max-w-4xl rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
		/>
	{/if}

	<section id="featuredWork" class="mt-8 space-y-4">
		{#if featured}
			<DisplayWork work={featured} />
		{:else}
			<p>Loading...</p>
		{/if}
	</section>
</section>
