<script lang="ts">
	import { goto } from '$app/navigation'
	import { toasts } from '$lib/pages/admin/Editor'
	import { draft } from '$lib/stores'
	import { toastStore } from '@skeletonlabs/skeleton'
	export let value: { title: string; content: string; files: any[] }, view: any
</script>

<section class="w-1/2">
	<div
		class="input-group input-group-divider grid-cols-[auto_1fr_auto] max-w-xl w-full variant-ghost"
	>
		<div class="input-group-shim">Title</div>
		{#if value}
			<input
				type="text"
				class="input input-bordered rounded-l-none rounded-lg"
				placeholder="Title"
				bind:value={value.title}
			/>
		{:else}
			<input
				type="text"
				class="input input-bordered rounded-l-none rounded-lg"
				placeholder="Title"
				bind:value
			/>
		{/if}
	</div>
</section>

<section class="space-x-2">
	<button
		class="btn variant-ghost-error rounded-lg"
		on:click={async () => {
			$draft = JSON.stringify({
				title: '',
				content: '',
				files: []
			})
			await goto('/auth/admin/documents')
		}}
		>Discard
	</button>

	<button
		class="btn variant-ghost-primary rounded-lg"
		on:click={async () => {
			if (Object.keys(view).length > 0) {
				const state = view.state.doc.toString()
				$draft = JSON.stringify({
					title: '',
					content: state,
					files: []
				})
				value = {
					title: '',
					content: state,
					files: []
				}
				toastStore.trigger(toasts.saveToast)
			}
		}}
		>Save
	</button>
</section>
