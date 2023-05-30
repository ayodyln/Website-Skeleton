<script lang="ts">
	import Hero from '../components/pages/home/Hero.svelte';
	import DisplayWork from '../components/UI/DisplayWork.svelte';
	import { onMount } from 'svelte';
	// import LatestPosts from '../components/pages/home/LatestPosts.svelte';

	let mostRecent: any = [];
	let featuredWork: any[] = [];

	onMount(async () => {
		try {
			let recent = await fetch('api/latest-posts');
			mostRecent = await recent.json();
			let work = await fetch('api/projects');
			let work_res = await work.json();
			featuredWork = work_res.filter((project: any) => project.tags.includes('Featured'));
		} catch (error) {
			console.log(error);
		}
	});
</script>

<section>
	<Hero />

	<div class="min-h-[1116px] max-w-5xl m-auto">
		<section class="w-full m-auto py-6 h-fit">
			<h2 class="text-2xl font-bold text-current opacity-50 mb-4">Featured Projects</h2>
			<DisplayWork work={featuredWork} />
		</section>
	</div>
</section>
