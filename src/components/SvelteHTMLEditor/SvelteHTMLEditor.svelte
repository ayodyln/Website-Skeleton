<script lang="ts">
	import { modeCurrent } from '@skeletonlabs/skeleton'

	export let value: { title: string; content: string }, editorPane: any, view: any

	// The Markdown parser will dynamically load parsers
	// for code blocks, using @codemirror/language-data to
	// look up the appropriate dynamic import.

	// tabKeydownHandler() - checks if the user has pressed the tab key while focused on the editorPane.
	// If so, it inserts a tab character at the cursor position.
	function tabKeydownHandler(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			// GitHub Copilot Function
			e.preventDefault()
			const cursorPosition = editorPane.selectionStart
			value.content =
				value.content.slice(0, cursorPosition) + '\t' + value.content.slice(cursorPosition)
			editorPane.selectionStart = cursorPosition + 1
			editorPane.selectionEnd = cursorPosition + 1
			editorPane.focus()
		}
	}
</script>

<div
	id="editor"
	bind:this={editorPane}
	class="overflow-auto color-current w-1/2 rounded-none {$modeCurrent
		? 'bg-surface-200'
		: 'bg-surface-900'} p-2"
	on:keyup={(e) => {
		const state = view.state.doc.toString()
		value = {
			title: '',
			content: state
		}
	}}
/>

<!-- {#if value.content}
	<div class="w-1/2 card rounded-none flex justify-center items-center">
		<p>Loading...</p>
	</div>
{:else} -->
<!-- <div
	id="editor"
	contenteditable
	class="overflow-auto w-1/2 rounded-none bg-surface-900 p-2 empty:before:content-[attr(data-placeholder)] empty:before:text-surface-500"
	data-placeholder="Start typing document in HTML and TailWindCSS/SkeletonUI..."
	bind:textContent={value.content}
	bind:this={editorPane}
/> -->
<!-- {/if} -->
