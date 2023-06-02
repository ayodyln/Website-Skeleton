<script lang="ts">
	import TechnologyCollapse from '../../components/pages/about/TechnologyCollapse.svelte'
	import ContactForm from '../../components/pages/about/ContactForm.svelte'
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton'
	import es from 'date-fns/locale/es'

	const tech: { title: string; content: string }[] = [
		{
			title: `JavaScript`,
			content: `JavaScript is my primary language. I've been using it for years and I'm always learning new things about it.`
		},
		{
			title: `
				NextJS
			`,
			content: `For over a year now, I've been studying and building applications with NextJS. My current job is building a 
					a applications that involve this framework. I've also built a few personal projects with it.
				`
		},
		{
			title: `SvelteKit`,
			content: `Before this framework was released, I have been building applications for fun with it. The natural feeling from developing with this framework is amazing and has the ability to create fast and powerful web applications.`
		},
		{
			title: `AWS Services`,
			content: `Using AWS Amplify and it's related services has enabled me as a developer to build applications with ease.
			I have experience with other servies and comfortable to use anything because AWS has helped me grow as a developer.`
		}
	]

	let currentTile: string = 'about'
</script>

<div id="aboutLayout" class="flex gap-4 my-4">
	<AppRail width="w-32" gap="">
		<AppRailTile bind:group={currentTile} name="about" value="about">
			<svelte:fragment slot="lead">About</svelte:fragment>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1}>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Tile 2</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={2}>
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Tile 3</span>
		</AppRailTile>
	</AppRail>

	<section class="space-y-4 w-full">
		{#if currentTile === 'about'}
			<p>
				I am a web and app developer and UI/UX designer. My passion has been to bring rich
				applications to life that is not only beautiful but accessible to everyone. The application
				design and development process is my specialization and I love to embrace the latest web
				technologies.
			</p>
		{:else}
			<p>error</p>
		{/if}
	</section>
</div>
