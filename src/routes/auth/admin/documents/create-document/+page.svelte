<script lang="ts">
	import { onMount } from 'svelte'
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'
	import { draft } from '$lib/stores'
	import { Toast, toastStore } from '@skeletonlabs/skeleton'
	import type { ToastSettings } from '@skeletonlabs/skeleton'
	import { AppShell } from '@skeletonlabs/skeleton'
	import { goto } from '$app/navigation'

	// This is a custom Svelte component that I made with assistance of GitHub Copilot.
	// All I need is a HTML editor that is simple and has widgets for common article UI
	// elements. I don't need a full-fledged WYSIWYG editor like TinyMCE or CKEditor--especially
	// since I'm using SvelteKit and not a framework like Vue or React.

	let value: string = !$draft ? '' : JSON.parse($draft)
	let mouseDown: boolean = false
	let left: any
	let parent: HTMLElement
	let minWidth: number = 500
	let previewPane: HTMLElement
	let editorPane: HTMLTextAreaElement

	onMount(() => {
		const interval = setInterval(() => {
			toastStore.trigger(autoSaveToast)
			$draft = JSON.stringify(value)
		}, 1000 * 60)

		return () => clearInterval(interval)
	})

	const autoSaveToast: ToastSettings = {
		message: 'Auto Saving Draft...',
		background: 'variant-ghost-primary'
	}

	const saveToast: ToastSettings = {
		message: 'Saving Draft...',
		background: 'variant-ghost-primary'
	}

	function insertImage() {
		// GitHub Copilot Function
		const cursorPosition = editorPane.selectionStart
		const imageString = '<img src="https://picsum.photos/200/300" alt="random image" />'
		value = value.slice(0, cursorPosition) + imageString + value.slice(cursorPosition)
		editorPane.selectionStart = cursorPosition + imageString.length
		editorPane.selectionEnd = cursorPosition + imageString.length
		editorPane.focus()
	}
</script>

<section class="h-[calc(100vh-8.5rem)]">
	<AppShell
		slotHeader="card rounded-none p-2 flex justify-end gap-2"
		slotSidebarLeft="card rounded-none p-2"
		slotPageHeader="card rounded-none p-2"
		slotFooter="flex justify-end p-2 card rounded-none"
	>
		<svelte:fragment slot="header">
			<button
				class="btn variant-ghost-error rounded-lg"
				on:click={async () => {
					$draft = ''
					await goto('/auth/admin/documents')
				}}
				>Discard
			</button>

			<button
				class="btn variant-ghost-primary rounded-lg"
				on:click={() => {
					$draft = JSON.stringify(value)
					toastStore.trigger(saveToast)
				}}
				>Save
			</button>
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<button on:click={insertImage} class="btn rounded-lg variant-ghost-surface fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
						/>
					</svg>
				</span>
			</button>
		</svelte:fragment>

		<svelte:fragment slot="pageHeader">
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] max-w-lg variant-ghost">
				<div class="input-group-shim">Title</div>
				<input type="search" placeholder="Document Title" />
			</div>
		</svelte:fragment>

		<!-- Router Slot -->
		<section
			bind:this={parent}
			id="editorContainer"
			class="flex w-full h-full"
			on:mousemove={(e) => {
				if (!mouseDown) return
				const parentRect = parent.getBoundingClientRect()
				if (e.pageX - parentRect.left < minWidth) return
				if (e.pageX - parentRect.left > parentRect.width - minWidth) return
				editorPane.style.width = `${e.pageX - parentRect.left}px`
			}}
			on:mouseup={() => {
				mouseDown = false
			}}
		>
			<SvelteHtmlEditor bind:value bind:editorPane />

			<div
				class="split__bar w-2 card hover:bg-surface-900 rounded-none variant-filled-surface flex items-center justify-center cursor-col-resize"
				on:mousedown={() => {
					mouseDown = true
				}}
				on:dblclick={() => {
					left.style.width = '50%'
				}}
			>
				<span class="select-none"> | </span>
			</div>

			<div
				bind:this={previewPane}
				class="flex-1 card rounded-none h-full break-all overflow-y-auto"
			>
				{#if !value}
					<div class="flex items-center justify-center h-full">
						<p class="text-2xl text-gray-400">Nothing to preview</p>
					</div>
				{:else}
					{@html value}
				{/if}
			</div>
		</section>
		<!-- ---- / ---- -->

		<svelte:fragment slot="footer">
			<button class="btn variant-ghost-primary">Upload Document</button>
		</svelte:fragment>
	</AppShell>
</section>

<Toast />
