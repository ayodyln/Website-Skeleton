<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css'
	// Most of your app wide CSS should be put in this file
	import '../app.postcss'

	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { AppShell } from '@skeletonlabs/skeleton'
	import Header from '../components/Layout/Header/Header.svelte'
	import Footer from '../components/Layout/Footer/Footer.svelte'

	export let data

	$: currentPage = $page.route.id

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header {session} />
	</svelte:fragment>
	<div class="flex-grow mb-20 h-full">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		{#if currentPage !== '/auth/admin'}
			<Footer />
		{/if}
	</svelte:fragment>
</AppShell>
