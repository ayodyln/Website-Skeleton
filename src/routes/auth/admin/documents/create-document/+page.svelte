<script lang="ts">
	import { onMount } from 'svelte'
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'
	import { draft } from '$lib/stores'

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
		console.log(value, $draft)

		const interval = setInterval(() => {
			console.log('Auto Save...')
		}, 1000 * 60)

		return () => clearInterval(interval)
	})
</script>

<section
	bind:this={parent}
	id="editorContainer"
	class="h-[calc(100vh-8.5rem)] flex w-full"
	on:mousemove={(e) => {
		if (!mouseDown) return
		const parentRect = parent.getBoundingClientRect()
		if (e.pageX - parentRect.left < minWidth) return
		if (e.pageX - parentRect.left > parentRect.width - minWidth) return
		left.style.width = `${e.pageX - parentRect.left}px`
	}}
	on:mouseup={() => {
		mouseDown = false
	}}
>
	<SvelteHtmlEditor
		bind:left
		bind:value
		bind:editorPane
		container="w-1/2 flex flex-col"
		body="w-full h-full rounded-t-none rounded-r-none"
		widgetsContainer="card p-2 rounded-b-none rounded-r-none"
	/>

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

	<div bind:this={previewPane} class="flex-1 card rounded-l-none h-full break-all overflow-y-auto">
		{#if !value}
			<div class="flex items-center justify-center h-full">
				<p class="text-2xl text-gray-400">Nothing to preview</p>
			</div>
		{:else}
			{@html value}
		{/if}
	</div>
</section>
