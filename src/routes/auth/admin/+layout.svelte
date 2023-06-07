<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	$: currentPage = $page.route.id
	$: breadCrumb = currentPage?.split('/').slice(2)
	$: lastItem = breadCrumb?.slice(-1)[0]
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
		<div id="adminHeader" class="p-4">
			<ol class="breadcrumb">
				{#if breadCrumb}
					{#each breadCrumb as crumb, i}
						{#if i === breadCrumb.length - 1}
							<li class="crumb capitalize">{lastItem}</li>
						{:else}
							<li class="crumb">
								<a class="anchor capitalize" href={`/auth/${crumb}`}>{crumb}</a>
							</li>
							<li class="crumb-separator" aria-hidden>/</li>
						{/if}
					{/each}
				{/if}
			</ol>
		</div>
	</svelte:fragment>
	<!-- ---- / ---- -->
	<slot />
</AppShell>
