<script lang="ts">
	import { page } from '$app/stores'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import HomeButton from './HomeButton.svelte'
	import { logoutHandler } from '$lib/supabase/functions'
	import { Avatar, popup, storePopup } from '@skeletonlabs/skeleton'
	import type { PopupSettings } from '@skeletonlabs/skeleton'
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom'

	$: currentPage = $page.route.id

	export let supabase: any, session: any

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow })

	const profileClick: PopupSettings = {
		event: 'click',
		target: 'profileClick',
		placement: 'top'
	}
</script>

<AppBar background="variant-soft-surface">
	<svelte:fragment slot="lead">
		<HomeButton />
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<nav>
			<ul class="flex items-center gap-2">
				<li>
					<a
						class="btn"
						class:variant-glass-surface={currentPage === '/work'}
						href="/work"
						data-sveltekit-preload-data="hover">Work</a
					>
				</li>

				<li>
					<a
						class="btn"
						class:variant-glass-surface={currentPage === '/blog'}
						href="/blog"
						data-sveltekit-preload-data="hover">Blog</a
					>
				</li>

				<li>
					<a
						class="btn"
						class:variant-glass-surface={currentPage === '/about'}
						href="/about"
						data-sveltekit-preload-data="hover">About</a
					>
				</li>

				<li>
					<a href="/resume.pdf" download class="btn variant-ghost">Resume</a>
				</li>

				<li class="ml-4">
					<LightSwitch />
				</li>

				{#if session}
					<li class="ml-4">
						<button use:popup={profileClick} on:click|stopPropagation>
							<Avatar class="card-hover" width="w-10" initials="DS" background="bg-primary-500" />
						</button>
					</li>
				{/if}
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>

<div class="card p-3" data-popup="profileClick">
	<ul class="space-y-4">
		<li><a href="/auth/admin" class="btn variant-ghost">Dashboard</a></li>
		<li>
			<button
				class="btn variant-filled-warning block w-full"
				on:click={() => logoutHandler(supabase)}>Logout</button
			>
		</li>
	</ul>
	<div class="arrow variant-filled-surface" />
</div>
