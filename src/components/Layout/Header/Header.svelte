<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import HomeButton from './HomeButton.svelte';

	$: currentPage = $page.route.id;
</script>

<AppBar background="variant-glass-primary">
	<svelte:fragment slot="lead">
		<HomeButton />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav>
			<ul class="flex gap-2 items-center">
				<li>
					<a class="btn btn-md variant-ghost" href="/work" data-sveltekit-preload-data="hover"
						>Work</a
					>
				</li>

				<li>
					<a class="btn btn-md variant-ghost" href="/blog" data-sveltekit-preload-data="hover"
						>Blog</a
					>
				</li>

				<li>
					<a class="btn btn-md variant-ghost" href="/about" data-sveltekit-preload-data="hover"
						>About</a
					>
				</li>

				<li class="ml-4">
					<LightSwitch />
				</li>
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>
