<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	$: currentPage = $page.route.id
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<div id="adminSideNav" class="w-56 h-full card rounded-none variant-glass-secondary p-2">
			<ul class="space-y-4">
				<li>
					<a class="block btn variant-glass-secondary" href="/auth/admin">Dashboard</a>
				</li>
				<li>
					<a class="block btn variant-glass-secondary" href="/auth/admin/documents">Documents</a>
				</li>
			</ul>
		</div>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageHeader">
		<div id="adminHeader">
			<h1 class="h1">Admin Dashboard</h1>
		</div>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<slot />
</AppShell>
