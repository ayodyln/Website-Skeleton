<script lang="ts">
	export let value: string = '',
		editorPane: HTMLTextAreaElement

	// tabKeydownHandler() - checks if the user has pressed the tab key while focused on the editorPane.
	// If so, it inserts a tab character at the cursor position.
	function tabKeydownHandler(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			// GitHub Copilot Function
			e.preventDefault()
			const cursorPosition = editorPane.selectionStart
			value = value.slice(0, cursorPosition) + '\t' + value.slice(cursorPosition)
			editorPane.selectionStart = cursorPosition + 1
			editorPane.selectionEnd = cursorPosition + 1
			editorPane.focus()
		}
	}
</script>

<textarea
	bind:this={editorPane}
	name="HTML"
	class="textarea resize-none overflow-auto w-1/2 rounded-none"
	placeholder="Start typing document in HTML and TailWindCSS/SkeletonUI..."
	bind:value
	on:keydown={(event) => {
		tabKeydownHandler(event)
	}}
/>
