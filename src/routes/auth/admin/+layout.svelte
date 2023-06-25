<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	$: myBreadcrumbs = $page.url.pathname.split('/').filter((s) => s !== 'auth')

	let sideBarState = false

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
	slotSidebarLeft="max-h-[calc(100vh-5rem)] card rounded-none variant-soft-secondary p-2 space-y-4 flex flex-col justify-between transition-all ease-in duration-100 w-{sideBarState
		? '56'
		: '16'}"
	slotPageHeader="p-4 h-14"
>
	<svelte:fragment slot="sidebarLeft">
		<section class="space-y-4">
			<a
				class="block btn flex items-center gap-2 fill-current h-11"
				class:variant-glass-primary={$page.url.pathname === '/auth/admin' ? true : false}
				class:variant-glass-secondary={$page.url.pathname !== '/auth/admin' ? true : false}
				href="/auth/admin"
			>
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
						/>
					</svg>
				</span>
				{#if sideBarState}
					Dashboard
				{/if}
			</a>

			<a
				class="block btn flex items-center gap-2 fill-current h-11"
				class:variant-glass-primary={$page.url.pathname === '/auth/admin/documents' ? true : false}
				class:variant-glass-secondary={$page.url.pathname !== '/auth/admin/documents'
					? true
					: false}
				href="/auth/admin/documents"
			>
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
						/>
					</svg>
				</span>
				{#if sideBarState}
					Documents
				{/if}
			</a>
		</section>

		<button
			on:click={() => {
				sideBarState = !sideBarState
			}}
			class="btn variant-soft w-full fill-current h-11 p-0"
		>
			{#if sideBarState}
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
					<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zM128 256c0-6.7 2.8-13 7.7-17.6l112-104c7-6.5 17.2-8.2 25.9-4.4s14.4 12.5 14.4 22l0 208c0 9.5-5.7 18.2-14.4 22s-18.9 2.1-25.9-4.4l-112-104c-4.9-4.5-7.7-10.9-7.7-17.6z"
					/>
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
					<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM320 256c0 6.7-2.8 13-7.7 17.6l-112 104c-7 6.5-17.2 8.2-25.9 4.4s-14.4-12.5-14.4-22l0-208c0-9.5 5.7-18.2 14.4-22s18.9-2.1 25.9 4.4l112 104c4.9 4.5 7.7 10.9 7.7 17.6z"
					/>
				</svg>
			{/if}
		</button>
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
