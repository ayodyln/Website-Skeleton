<script lang="ts">
	import { onMount } from 'svelte'

	export let value: string = '',
		container: string = '',
		body: string = '',
		widgetsContainer: string = '',
		footerContainer: string = '',
		left: any

	let textarea: HTMLTextAreaElement

	function insertImage() {
		// GitHub Copilot Function
		const cursorPosition = textarea.selectionStart
		const imageString = '<img src="https://picsum.photos/200/300" alt="random image" />'
		value = value.slice(0, cursorPosition) + imageString + value.slice(cursorPosition)
		textarea.selectionStart = cursorPosition + imageString.length
		textarea.selectionEnd = cursorPosition + imageString.length
		textarea.focus()
	}

	function tabKeydownHandler(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			// GitHub Copilot Function
			e.preventDefault()
			const cursorPosition = textarea.selectionStart
			value = value.slice(0, cursorPosition) + '\t' + value.slice(cursorPosition)
			textarea.selectionStart = cursorPosition + 1
			textarea.selectionEnd = cursorPosition + 1
			textarea.focus()
		}
	}

	onMount(() => {
		console.log(left.style.width)
	})
</script>

<main id="SvelteHTMLEditor" class={container} bind:this={left}>
	<!-- Svelte HTML Editor -->

	<!-- Head -->
	<section id="widgets" class={widgetsContainer}>
		<button on:click={insertImage} class="btn btn-round variant-filled"> Image </button>
	</section>

	<!-- Body -->
	<textarea
		bind:this={textarea}
		name="HTML"
		class="textarea resize-none {body}"
		bind:value
		on:keydown={tabKeydownHandler}
	/>
	<!-- /Body -->

	<!-- Footer/Actions -->
	<section id="footerActions" class={footerContainer}>
		<!--  -->
	</section>
</main>
