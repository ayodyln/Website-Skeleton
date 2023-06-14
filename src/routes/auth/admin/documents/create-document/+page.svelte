<script lang="ts">
	import { onMount } from 'svelte'
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'
	import { draft } from '$lib/stores'
	import {
		Toast,
		toastStore,
		AppShell,
		popup,
		modeCurrent,
		FileDropzone
	} from '@skeletonlabs/skeleton'
	import type { ToastSettings, PopupSettings } from '@skeletonlabs/skeleton'
	import { goto } from '$app/navigation'

	import { basicSetup, EditorView } from 'codemirror'
	import { markdown } from '@codemirror/lang-markdown'
	import { languages } from '@codemirror/language-data'
	import { indentWithTab } from '@codemirror/commands'
	import { placeholder, keymap } from '@codemirror/view'
	import Widgets from '../../../../../components/SvelteHTMLEditor/Widgets.svelte'

	// This is a custom Svelte component that I made with assistance of GitHub Copilot.
	// All I need is a HTML editor that is simple and has widgets for common article UI
	// elements. I don't need a full-fledged WYSIWYG editor like TinyMCE or CKEditor--especially
	// since I'm using SvelteKit and not a framework like Vue or React.

	let value: { title: string; content: string; files: any[] } = {
		title: '',
		content: '',
		files: []
	}
	let mouseDown: boolean = false
	let left: any
	let parent: HTMLElement
	let minWidth: number = 500
	let previewPane: HTMLElement
	let editorPane: HTMLTextAreaElement
	let view: any = {}
	let files: FileList
	let tempImg: string

	onMount(() => {
		value = JSON.parse($draft)
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
					'&.cm-focused .cm-cursor': {
						borderLeftColor: $modeCurrent ? 'var(--surface-200)' : 'var(--surface-900)'
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
				placeholder('Start typing document in HTML and TailWindCSS/SkeletonUI...'),
				keymap.of([indentWithTab])
			],
			parent: document.getElementById('editor') as HTMLElement
		})

		const interval = setInterval(() => {
			toastStore.trigger(toasts.autoSaveToast)
			$draft = JSON.stringify({
				title: '',
				content: value.content
			})
		}, 1000 * 60)

		return () => clearInterval(interval)
	})

	interface ToastSettingsMap {
		[key: string]: ToastSettings
	}
	const toasts: ToastSettingsMap = {
		autoSaveToast: {
			message: 'Auto Saving Draft...',
			background: 'variant-ghost-primary',
			callback: () => {
				console.log('Auto Save Toast')
			}
		},
		saveToast: {
			message: 'Saving Draft...',
			background: 'variant-ghost-primary',
			callback: () => {
				console.log('Saving Toast')
			}
		}
	}

	interface PopupSettingsMap {
		[key: string]: PopupSettings
	}
	const popups: PopupSettingsMap = {
		insertImage: {
			event: 'click',
			target: 'insertImage',
			placement: 'right',
			state(event) {
				console.log(event)
			}
		},
		insertHero: {
			event: 'click',
			target: 'insertHero',
			placement: 'right',
			state(event) {}
		}
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
		slotPageContent="card rounded-none border-none outline-none"
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
								content: state,
								files: []
							})
							value = {
								title: '',
								content: state,
								files: []
							}
							toastStore.trigger(toasts.saveToast)
						}
					}}
					>Save
				</button>
			</section>
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<Widgets {popups} />
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
				class="w-2.5 p-2 btn variant-filled-surface rounded-none flex items-center justify-center cursor-col-resize"
				on:mousedown={() => {
					mouseDown = true
				}}
				on:dblclick={() => {
					left.style.width = '50%'
				}}
			>
				<span class="select-none"> || </span>
			</div>

			<article
				bind:this={previewPane}
				class="flex-1 card rounded-none h-full break-all overflow-y-auto p-2"
			>
				{#if !value.content}
					<div class="flex items-center justify-center h-full">
						<p class="text-2xl text-gray-400">Nothing to preview</p>
					</div>
				{:else}
					{@html value.content}
				{/if}
			</article>
		</section>
		<!-- ---- / ---- -->

		<svelte:fragment slot="footer">
			<button class="btn variant-ghost-tertiary rounded-lg">Create Draft</button>
			<button class="btn variant-ghost-primary rounded-lg">Upload Document</button>
		</svelte:fragment>
	</AppShell>
</section>

<Toast />

<div class="card card-hover p-4 w-72 shadow-xl" data-popup="insertImage">
	<div class="space-y-4">
		<h4 class="h4">Insert Image</h4>

		{#if !tempImg}
			<FileDropzone
				name="files"
				class="w-full h-32"
				bind:files
				on:change={(event) => {
					console.log(files)
					const file = files[0]
					tempImg = URL.createObjectURL(file)
				}}
			/>

			<section class="w-full flex opacity-50 pointer-events-none gap-1">
				<button class="btn variant-ghost rounded-lg w-1/2">Cancel</button>
				<button class="btn variant-ghost-primary rounded-lg w-1/2">Insert</button>
			</section>
		{:else}
			<figure class="w-full h-32 flex justify-center card">
				<img src={tempImg} alt="Temp" class="h-full w-auto" />
			</figure>

			<section class="w-full flex gap-1">
				<button class="btn variant-ghost rounded-lg w-1/2">Cancel</button>
				<button
					class="btn variant-ghost-primary rounded-lg w-1/2"
					on:click={() => {
						// create a function that will insert the image from tempImg into my editor state on the same line as a image tag, the src attr will equal the tempImg
						// then clear the tempImg
						// then close the popup

						console.log(view)
						view.dispatch({
							changes: { from: 0, insert: 'Hello World' }
						})
					}}>Insert</button
				>
			</section>
		{/if}

		<div class="arrow card" />
	</div>
</div>
