<script lang="ts">
	import { page } from '$app/stores'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import HomeButton from './HomeButton.svelte'
	import { onMount } from 'svelte'

	$: currentPage = $page.route.id

	onMount(() => {})
</script>

<AppBar background="variant-ghost-surface">
	<svelte:fragment slot="lead">
		<HomeButton />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav>
			<ul class="flex gap-2 items-center">
				<li>
					<a
						class="btn btn-md variant-ghost"
						class:variant-filled={currentPage === 'work'}
						href="/work"
						data-sveltekit-preload-data="hover">Work</a
					>
				</li>

				<li>
					<a
						class="btn btn-md variant-ghost"
						class:variant-filled={currentPage === 'blog'}
						href="/blog"
						data-sveltekit-preload-data="hover">Blog</a
					>
				</li>

				<li>
					<a
						class="btn btn-md variant-ghost"
						class:variant-filled={currentPage === 'about'}
						href="/about"
						data-sveltekit-preload-data="hover">About</a
					>
				</li>

				<li class="ml-4">
					<LightSwitch
						
					/>
				</li>
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>
