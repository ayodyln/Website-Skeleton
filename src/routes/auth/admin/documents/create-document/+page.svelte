<script lang="ts">
	import { onMount } from 'svelte'
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'
	import { draft } from '$lib/stores'
	import { Toast, toastStore, AppShell, popup, modeCurrent } from '@skeletonlabs/skeleton'
	import type { ToastSettings, PopupSettings } from '@skeletonlabs/skeleton'
	import { goto } from '$app/navigation'

	import { basicSetup, EditorView } from 'codemirror'
	import { markdown } from '@codemirror/lang-markdown'
	import { languages } from '@codemirror/language-data'
	import { placeholder } from '@codemirror/view'

	// This is a custom Svelte component that I made with assistance of GitHub Copilot.
	// All I need is a HTML editor that is simple and has widgets for common article UI
	// elements. I don't need a full-fledged WYSIWYG editor like TinyMCE or CKEditor--especially
	// since I'm using SvelteKit and not a framework like Vue or React.

	let value: { title: string; content: string } = {
		title: '',
		content: ''
	}
	let mouseDown: boolean = false
	let left: any
	let parent: HTMLElement
	let minWidth: number = 500
	let previewPane: HTMLElement
	let editorPane: HTMLTextAreaElement
	let view: any = {}

	onMount(() => {
		value = JSON.parse($draft)
		console.log(value)

		view = new EditorView({
			extensions: [
				basicSetup,
				markdown({ codeLanguages: languages }),
				EditorView.baseTheme({
					'.cm-editor': {
						border: 'none'
					},
					'&.cm-focused': {
						outline: 'none'
					},
					'.cm-gutters': {
						backgroundColor: 'transparent'
					},
					'.cm-gutter': {
						backgroundColor: 'transparent'
					},
					'.cm-gutterElement': {
						backgroundColor: 'transparent'
					},
					'.cm-activeLine.cm-line': {
						backgroundColor: 'transparent'
					}
				}),
				placeholder('Start typing document in HTML and TailWindCSS/SkeletonUI...')
			],
			parent: document.getElementById('editor') as HTMLElement
		})

		const interval = setInterval(() => {
			toastStore.trigger(autoSaveToast)
			$draft = JSON.stringify({
				title: '',
				content: value.content
			})
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

	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'right'
	}

	function insertImage() {
		// GitHub Copilot Function
		const cursorPosition = editorPane.selectionStart
		const imageString = '<img src="https://picsum.photos/200/300" alt="random image" />'
		value.content =
			value.content.slice(0, cursorPosition) + imageString + value.content.slice(cursorPosition)
		editorPane.selectionStart = cursorPosition + imageString.length
		editorPane.selectionEnd = cursorPosition + imageString.length
		editorPane.focus()
	}
</script>

<section class="h-[calc(100vh-8.5rem)]">
	<AppShell
		slotHeader="card rounded-none p-2 flex justify-between items-center gap-2"
		slotSidebarLeft="card rounded-none p-2 flex flex-col gap-2"
		slotFooter="flex justify-end p-2 card rounded-none space-x-2"
	>
		<svelte:fragment slot="header">
			<section class="w-1/2">
				<div
					class="input-group input-group-divider grid-cols-[auto_1fr_auto] max-w-xl w-full variant-ghost"
				>
					<div class="input-group-shim">Title</div>
					{#if value}
						<input
							type="text"
							class="input input-bordered rounded-l-none rounded-lg"
							placeholder="Title"
							bind:value={value.title}
						/>
					{:else}
						<input
							type="text"
							class="input input-bordered rounded-l-none rounded-lg"
							placeholder="Title"
							bind:value
						/>
					{/if}
				</div>
			</section>

			<section class="space-x-2">
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
					on:click={async () => {
						if (Object.keys(view).length > 0) {
							const state = view.state.doc.toString()
							$draft = JSON.stringify({
								title: '',
								content: state
							})
							value = {
								title: '',
								content: state
							}
							toastStore.trigger(saveToast)
						}
					}}
					>Save
				</button>
			</section>
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<button use:popup={popupFeatured} class="btn rounded-lg variant-ghost-surface fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 512 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
						/>
					</svg>
				</span>
			</button>

			<button use:popup={popupFeatured} class="btn rounded-lg variant-ghost-surface fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5" viewBox="0 0 640 512">
						<!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M45.6 32C20.4 32 0 52.4 0 77.6V434.4C0 459.6 20.4 480 45.6 480c5.1 0 10-.8 14.7-2.4C74.6 472.8 177.6 440 320 440s245.4 32.8 259.6 37.6c4.7 1.6 9.7 2.4 14.7 2.4c25.2 0 45.6-20.4 45.6-45.6V77.6C640 52.4 619.6 32 594.4 32c-5 0-10 .8-14.7 2.4C565.4 39.2 462.4 72 320 72S74.6 39.2 60.4 34.4C55.6 32.8 50.7 32 45.6 32zM96 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm272 0c7.9 0 15.4 3.9 19.8 10.5L512.3 353c5.4 8 5.6 18.4 .4 26.5s-14.7 12.3-24.2 10.7C442.7 382.4 385.2 376 320 376c-65.6 0-123.4 6.5-169.3 14.4c-9.8 1.7-19.7-2.9-24.7-11.5s-4.3-19.4 1.9-27.2L197.3 265c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l26.4 33.1 87-127.6c4.5-6.6 11.9-10.5 19.8-10.5z"
						/>
					</svg>
				</span>
			</button>
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
			<SvelteHtmlEditor bind:value bind:editorPane {view} />

			<div
				class="w-2.5 {$modeCurrent
					? 'bg-surface-300'
					: 'bg-surface-700'} rounded-none flex items-center justify-center cursor-col-resize"
				on:mousedown={() => {
					mouseDown = true
				}}
				on:dblclick={() => {
					left.style.width = '50%'
				}}
			>
				<span class="select-none"> || </span>
			</div>

			<div
				bind:this={previewPane}
				class="flex-1 {$modeCurrent
					? 'bg-surface-200'
					: 'bg-surface-900'} rounded-none h-full break-all overflow-y-auto p-2"
			>
				{#if !value.content}
					<div class="flex items-center justify-center h-full">
						<p class="text-2xl text-gray-400">Nothing to preview</p>
					</div>
				{:else}
					{@html value.content}
				{/if}
			</div>
		</section>
		<!-- ---- / ---- -->

		<svelte:fragment slot="footer">
			<button class="btn variant-ghost-tertiary rounded-lg">Create Draft</button>
			<button class="btn variant-ghost-primary rounded-lg">Upload Document</button>
		</svelte:fragment>
	</AppShell>
</section>

<Toast />

<div class="card variant-ghost p-4 w-72 shadow-xl" data-popup="popupFeatured">
	<div><p>Demo Content</p></div>
</div>
