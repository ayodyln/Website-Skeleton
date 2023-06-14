<script lang="ts">
	export let value: { title: string; content: string }, editorPane: any

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

{#if !value}
	<div class="w-1/2 card rounded-none flex justify-center items-center">
		<p>Loading...</p>
	</div>
{:else}
	<!-- <textarea
		bind:this={editorPane}
		name="HTML"
		class="textarea resize-none overflow-auto w-1/2 rounded-none"
		placeholder="Start typing document in HTML and TailWindCSS/SkeletonUI..."
		bind:value={value.content}
		on:keydown={(event) => {
			tabKeydownHandler(event)
		}}
	/> -->
	<div
		contenteditable
		class="overflow-auto w-1/2 rounded-none bg-surface-900 p-2 empty:before:content-[attr(data-placeholder)] empty:before:text-surface-500"
		data-placeholder="Start typing document in HTML and TailWindCSS/SkeletonUI..."
		bind:textContent={value.content}
		bind:this={editorPane}
	/>
{/if}
