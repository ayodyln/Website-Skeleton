<script lang="ts">
	import { format } from 'date-fns'
	import { onMount } from 'svelte'
	import DisplayWork from '../../components/UI/DisplayWork.svelte'

	let unfeaturedProjects: any[] = []
	let starredProject: any
	let featured: any[]

	export let data: any

	onMount(async () => {
		const projects = data.projects
		starredProject = projects.find((post: { tags: any[] }) => post.tags.find((tag: any) => tag === 'Star'))
		featured = projects.filter(
			(project: { tags: string | string[]; id: any }) =>
				project.tags.includes('Featured') && project.id !== starredProject.id
		)
	})

</script>

<div class="my-8">
	<section class="h-96 max-w-5xl w-full m-auto">
		{#if starredProject}
			<a href={starredProject.path}>
				<div
					id="article_hero"
					class="bg-neutral max-h-96 h-full rounded-lg bg-cover bg-no-repeat bg-center shadow-lg mx-auto text-start relative"
					style={`background-image: url(${starredProject.hero_image});`}
				>
					<span
						class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-neutral to-transparent h-60 flex justify-between items-end rounded-b-md text-white"
					>
						<div class="w-3/4">
							<div class="badge badge-sm badge-outline mb-2">Featured Project</div>
							<p class="text-3xl font-mono">{starredProject.title}</p>
							<p class="font-mono">{format(new Date(starredProject.publish_date), 'MMMM do, yyyy')}</p>
						</div>
					</span>
				</div>
			</a>
		{:else}
			<div
				id="article_hero"
				class="bg-neutral h-full rounded-lg bg-cover bg-no-repeat bg-center shadow-lg max-w-4xl w-full mx-auto"
			/>
		{/if}
	</section>
</div>

<section class="max-w-5xl w-full m-auto h-full flex flex-col gap-20">
	<section id="featuredWork" class="max-w-5xl w-full m-auto space-y-4 h-fit">
		<!-- Featured Recent Work -->
		{#if featured}
			<DisplayWork work={featured} />
		{:else}
			<p>Loading...</p>
		{/if}
	</section>

	<section id="featuredWork" class="max-w-5xl w-full m-auto space-y-4 h-auto">
		<!-- Unfeatured projects -->
		{#if unfeaturedProjects.length > 0}
			<h2>All Projects</h2>
			<div class="grid grid-cols-4 grid-rows-auto gap-2">
				{#each unfeaturedProjects as project}
					<div class="bg-neutral rounded-xl h-56 shadow-lg">
						<div>h2</div>
						<div>h2</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- <div class="grid grid-cols-4 grid-rows-auto gap-2 animate-pulse">
				{#each Array(10) as project}
					<div class="bg-neutral rounded-xl h-56 shadow-lg">
						<div>
							<h3>Test Title</h3>
							<span>tech</span>
						</div>
					</div>
				{/each}
			</div> -->
		{/if}
	</section>
</section>
