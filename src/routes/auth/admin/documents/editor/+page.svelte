<script lang="ts">
	import { onMount } from 'svelte'
	import { draft } from '$lib/stores'
	import {
		Toast,
		toastStore,
		AppShell,
		FileDropzone,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton'
	import SvelteHtmlEditor from '../../../../../components/SvelteHTMLEditor/SvelteHTMLEditor.svelte'
	import { svelteHTMLEditor, toasts } from '$lib/pages/admin/Editor'
	import EditorHeader from '../../../../../components/SvelteHTMLEditor/EditorHeader.svelte'

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
	let minWidth: number = 375
	let previewPane: HTMLElement
	let editorPane: HTMLTextAreaElement
	let view: any = {}
	let files: FileList
	let tempImg: string

	// default values for popups; becaause the editor and appshell is having issues mounting popups
	let imagePopup: PopupSettings = {
		event: 'click',
		target: 'imagePopup',
		placement: 'right'
	}

	onMount(() => {
		// Setting the value of the editor and view
		value = JSON.parse($draft)
		view = svelteHTMLEditor()

		// Mount popups, for some some dumb reason it won't work normally...
		imagePopup = {
			event: 'click',
			target: 'imagePopup',
			placement: 'right'
		}

		// Auto Save interval
		const interval = setInterval(() => {
			toastStore.trigger(toasts.autoSaveToast)
			$draft = JSON.stringify({
				title: value.title,
				content: value.content,
				files: value.files
			})
		}, 1000 * 60)

		return () => clearInterval(interval)
	})
</script>

<section class="h-[calc(100vh-8.5rem)]">
	<AppShell
		slotHeader="card rounded-none p-2 flex justify-between items-center gap-2"
		slotSidebarLeft="card rounded-none p-2 flex flex-col gap-2"
		slotPageContent="card rounded-none border-none outline-none"
		slotFooter="flex justify-end p-2 card rounded-none space-x-2"
	>
		<svelte:fragment slot="header">
			<EditorHeader {value} {view} />
		</svelte:fragment>

		<svelte:fragment slot="sidebarLeft">
			<!-- <Widgets {popups} /> -->
			<button class="btn variant-ghost fill-current" use:popup={imagePopup}>
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
						<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M400 368v48c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V368H400zM75.3 320H48V96c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16V320H376.4L284.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-56 85.6-16.6-22.6c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L75.3 320zM448 320V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V320v24 24 48c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V368 344 320zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
						/>
					</svg>
				</span>
			</button>

			<button class="btn variant-ghost fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
						<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M576 64H0V448H576V64zM128 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm200-16l19.2 25.6L484 384H80.8l12.8-15.4 80-96L192 250.5l18.4 22.1 23.7 28.5 74.6-99.5L328 176z"
						/>
					</svg>
				</span>
			</button>

			<button class="btn variant-ghost fill-current">
				<span class="icon">
					<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
						<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
							d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"
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

<div class="card card-hover p-4 w-72 shadow-xl" data-popup="imagePopup">
	<div class="space-y-4">
		<h4 class="h4">Insert Image</h4>

		{#if !tempImg}
			<FileDropzone
				name="files"
				class="w-full h-32"
				bind:files
				on:change={(event) => {
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
					on:click={() => {
						const pos = view.state.selection.main.head
						view.dispatch({
							changes: {
								from: pos,
								to: pos,
								insert: `<figure>\n\t<img src="${tempImg}" alt="Temp" />\n</figure>`
							}
						})
						$draft = JSON.stringify({
							...JSON.parse($draft),
							content: view.state.doc.toString()
						})
						value = JSON.parse($draft)
					}}
					class="btn variant-ghost-primary rounded-lg w-1/2">Insert</button
				>
			</section>
		{/if}

		<div class="arrow card" />
	</div>
</div>
