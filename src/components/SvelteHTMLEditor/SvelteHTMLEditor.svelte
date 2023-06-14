<script lang="ts">
	import { draft } from '$lib/stores'
	import { Toast, toastStore } from '@skeletonlabs/skeleton'
	import type { ToastSettings } from '@skeletonlabs/skeleton'

	export let value: string = '',
		container: string = '',
		body: string = '',
		widgetsContainer: string = '',
		footerContainer: string = '',
		left: any,
		editorPane: HTMLTextAreaElement

	function insertImage() {
		// GitHub Copilot Function
		const cursorPosition = editorPane.selectionStart
		const imageString = '<img src="https://picsum.photos/200/300" alt="random image" />'
		value = value.slice(0, cursorPosition) + imageString + value.slice(cursorPosition)
		editorPane.selectionStart = cursorPosition + imageString.length
		editorPane.selectionEnd = cursorPosition + imageString.length
		editorPane.focus()
	}

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

	const saveToast: ToastSettings = {
		message: 'Saving Draft...',
		background: 'variant-ghost-primary'
	}
</script>

<main id="SvelteHTMLEditor" class={container} bind:this={left}>
	<!-- Svelte HTML Editor -->

	<!-- Head -->
	<section id="widgets" class="flex items-center justify-between {widgetsContainer}">
		<div id="actions">
			<button on:click={insertImage} class="btn rounded-lg variant-ghost fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
						/>
					</svg>
				</span>
			</button>
		</div>

		<div id="crud" class="space-x-1">
			<button class="btn variant-ghost-error rounded-lg">Cancel</button>
			<button
				class="btn variant-ghost-primary rounded-lg"
				on:click={() => {
					$draft = JSON.stringify(value)
					toastStore.trigger(saveToast)
				}}>Save</button
			>
		</div>
	</section>

	<!-- Body -->
	<textarea
		bind:this={editorPane}
		name="HTML"
		class="textarea resize-none overflow-auto {body}"
		placeholder="Start typing document in HTML and TailWindCSS/SkeletonUI..."
		bind:value
		on:keydown={(event) => {
			tabKeydownHandler(event)
		}}
	/>
	<!-- /Body -->

	<!-- Footer/Actions -->
	<section id="footerActions" class={footerContainer}>
		<!--  -->
	</section>

	<Toast />
</main>
