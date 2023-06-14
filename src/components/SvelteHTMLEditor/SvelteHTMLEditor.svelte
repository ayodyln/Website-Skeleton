<script lang="ts">
	export let value: { title: string; content: string }, editorPane: any, view: any
</script>

<div
	id="editor"
	bind:this={editorPane}
	class="overflow-auto card color-current w-1/2 rounded-none p-2"
	on:keyup={() => {
		const state = view.state.doc.toString()
		value = {
			title: '',
			content: state
		}
	}}
/>
