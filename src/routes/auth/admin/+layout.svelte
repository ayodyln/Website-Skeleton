<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	$: myBreadcrumbs = $page.url.pathname.split('/').filter((s) => s !== 'auth')

	function routeHandler(str: string) {
		switch (str) {
			case 'admin':
				return '/auth/admin'
			case 'documents':
				return '/auth/admin/documents'
			default:
				break
		}
	}
</script>

<AppShell
	regionPage="h-[calc(100vh-5rem)]"
	slotSidebarLeft="h-[calc(100vh-5rem)]"
	slotPageHeader="p-4 h-14"
>
	<svelte:fragment slot="sidebarLeft">
		<div id="adminSideNav" class="w-56 h-full card rounded-none variant-soft-secondary p-2">
			<ul class="space-y-4">
				<li>
					<a
						class="block btn"
						class:variant-glass-primary={$page.url.pathname === '/auth/admin' ? true : false}
						class:variant-glass-secondary={$page.url.pathname !== '/auth/admin' ? true : false}
						href="/auth/admin">Dashboard</a
					>
				</li>
				<li>
					<a
						class="block btn variant-glass-secondary"
						class:variant-glass-primary={$page.url.pathname === '/auth/admin/documents'
							? true
							: false}
						class:variant-glass-secondary={$page.url.pathname !== '/auth/admin/documents'
							? true
							: false}
						href="/auth/admin/documents">Documents</a
					>
				</li>
			</ul>
		</div>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageHeader">
		<ol class="breadcrumb capitalize h-full">
			{#each myBreadcrumbs as crumb, i}
				{#if i < myBreadcrumbs.length - 1}
					<li class="crumb"><a class="anchor" href={routeHandler(crumb)}>{crumb}</a></li>
					<li class="crumb-separator" aria-hidden>/</li>
				{:else}
					<li class="crumb">{crumb === 'admin' ? 'dashboard' : crumb}</li>
				{/if}
			{/each}
		</ol>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<slot />
</AppShell>
