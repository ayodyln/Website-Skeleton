<script lang="ts">
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'

	let value: string
	let mouseDown: boolean = false
	let left: any
	let parent: HTMLElement
</script>

<section
	bind:this={parent}
	id="editorContainer"
	class="h-[calc(100vh-8.5rem)] flex w-full"
	on:mousemove={(e) => {
		if (!mouseDown) return
		const parentRect = parent.getBoundingClientRect()
		left.style.width = `${e.pageX - parentRect.left}px`
	}}
	on:mouseup={() => {
		mouseDown = false
	}}
>
	<SvelteHtmlEditor
		bind:left
		bind:value
		container="w-1/2 flex flex-col"
		body="w-full h-full rounded-t-none rounded-r-none"
		widgetsContainer="card p-1 rounded-b-none rounded-r-none"
	/>

	<div
		class="split__bar w-2 card rounded-none variant-filled-surface flex items-center justify-center cursor-col-resize"
		on:mousedown={(event) => {
			mouseDown = true
		}}
	>
		|
	</div>

	<div class="flex-1 card rounded-l-none h-full break-all">
		{@html value}
	</div>
</section>
