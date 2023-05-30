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
			console.log(featuredWork)
		} catch (error) {
			console.log(error);
		}
	});
</script>

<section>
	<Hero />

	<div class=" max-w-5xl m-auto">
		<section>
			<DisplayWork work={featuredWork} />
		</section>
	</div>
</section>
