<script lang="ts">
	import { techChip } from '../../../components/UI/DisplayWork'

	export let data: any
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="mx-auto my-4 w-full max-w-5xl space-y-4">
	<hgroup
		class="h-96 overflow-hidden rounded-lg bg-cover bg-no-repeat"
		style="background-image: url({data.meta.hero_image});"
	>
		<div
			class="flex h-full w-[4000px] flex-col justify-end gap-4 bg-gradient-to-tr from-surface-900/90 from-20% to-transparent p-4 text-surface-50"
		>
			<h1 class="h1 font-mono">{data.meta.title}</h1>

			<h3>Client: Utah Valley University - Digital Media Department</h3>

			<div class="flex flex-wrap gap-2">
				{#each data.meta.tech as tech}
					{#if tech.toString() !== 'Favorite'}
						<span class="chip {techChip(tech.toString())}">
							{tech}
						</span>
					{/if}
				{/each}
			</div>
		</div>
	</hgroup>

	<svelte:component this={data.content} />
</article>
