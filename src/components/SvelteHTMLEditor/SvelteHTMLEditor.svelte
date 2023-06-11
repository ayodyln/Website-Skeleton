<script lang="ts">
	export let value: string = '',
		container: string = '',
		body: string = '',
		widgetsContainer: string = '',
		footerContainer: string = ''

	let textarea: HTMLTextAreaElement

	function insertImage() {
		const cursorPosition = textarea.selectionStart
		const imageString = '<img src="https://picsum.photos/200/300" alt="random image" />'
		value = value.slice(0, cursorPosition) + imageString + value.slice(cursorPosition)
		textarea.selectionStart = cursorPosition + imageString.length
		textarea.selectionEnd = cursorPosition + imageString.length
		textarea.focus()
	}
</script>

<main id="SvelteHTMLEditor" class={container}>
	<!-- Svelte HTML Editor -->
	<!-- Head -->
	<section id="widgets">
		<button on:click={insertImage} class="btn btn-round variant-filled"> Image </button>
	</section>
	<!-- Body -->
	<textarea
		bind:this={textarea}
		name="HTML"
		class="textarea resize-none {body}"
		bind:value
		on:keydown={(e) => {
			if (e.key === 'Tab') {
				return false
			}
		}}
	/>
	<!-- /Body -->
	<!-- Footer/Actions -->
	<section id="footerActions">
		<!--  -->
	</section>
</main>
