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
	let minWidth: number = 500
	let previewPane: HTMLElement
	let editorPane: HTMLTextAreaElement
	let view: any = {}
	let files: FileList
	let tempImg: string

	let popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	}

	onMount(() => {
		value = JSON.parse($draft)
		view = svelteHTMLEditor()
		
		popupClick = {
			event: 'click',
			target: 'popupClick',
			placement: 'top'
		}

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
			<button class="btn variant-filled" use:popup={popupClick}>Click</button>
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

<!-- <div class="card card-hover p-4 w-72 shadow-xl" data-popup="p">
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
</div> -->

<div class="card p-4 variant-filled-primary" data-popup="popupClick">
	<p>Click Content</p>
	<div class="arrow variant-filled-primary" />
</div>
