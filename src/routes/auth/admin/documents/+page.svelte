<script lang="ts">
	import type { Article } from '$lib/types'
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'

	import AdminTable from '../../../../components/pages/admin/AdminTable.svelte'
	import { Autocomplete, popup } from '@skeletonlabs/skeleton'
	import { deleteHandler, fetchDocumentsData } from '$lib/pages/admin/documents'
	import { goto } from '$app/navigation'
	import { draft } from '$lib/stores'

	export let data

	let { supabase } = data
	$: ({ supabase } = data)

	let sourceData: any = []

	$: page = {
		offset: 0,
		limit: 5,
		size: sourceData.length,
		amounts: [1, 2, 5, 10]
	}

	let checkedItems: string[] = []

	let documentOptions: AutocompleteOption[]

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	}

	let autocompletePopUp: string = ''

	function onPopupDemoSelect(event: any): void {
		autocompletePopUp = event.detail.label
	}

	const checkAll = (event: { target: { checked: boolean; dataset: { id: string } } }) => {
		const checkInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('#documentCheck')
		const checkAllInput = event.target.checked
		if (checkAllInput) {
			checkInputs.forEach((input: HTMLInputElement) => {
				input.checked = true
				checkedItems = [...checkedItems, String(input.dataset.id)]
			})
		} else {
			checkInputs.forEach((input) => (input.checked = false))
			checkedItems = []
		}
	}

	const singleCheck = (event: { target: { checked: any; dataset: { id: string } } }) =>
		event.target.checked
			? (checkedItems = [...checkedItems, event.target.dataset.id])
			: (checkedItems = checkedItems.filter((id: string) => id !== event.target.dataset.id))

	onMount(async () => {
		sourceData = await fetchDocumentsData(supabase)

		const documents = supabase
			.channel('custom-all-channel')
			.on(
				'postgres_changes',
				{ event: '*', schema: 'public', table: 'documents' },
				(payload: any) => {
					console.log('Change received!', payload)

					if (Object.keys(payload.new).length > 0) {
						console.log('New document added!')
						sourceData = [...sourceData, payload.new]
					} else if (Object.keys(payload.old).length > 0) {
						console.log('Document deleted!')
						sourceData = sourceData.filter((doc: { id: any }) => doc.id !== payload.old.id)
					} else {
						console.log('Document updated!')
					}
				}
			)
			.subscribe()

		documentOptions = sourceData.map((doc: Article) => {
			return {
				label: doc.title,
				value: doc.id
			}
		})

		return () => documents.unsubscribe()
	})
</script>

<section class="adminPageContent flex flex-col gap-4 overflow-hidden p-4 pt-0">
	<h2 class="h2">Documents</h2>

	<section class="card p-2 flex justify-between items-center">
		<div class="max-w-lg w-full">
			<input
				class="input autocomplete"
				type="search"
				name="autocomplete-search"
				bind:value={autocompletePopUp}
				placeholder="Search..."
				use:popup={popupSettings}
			/>
			<div data-popup="popupAutocomplete" class="card max-w-lg w-full shadow-xl p-1">
				<Autocomplete
					bind:input={autocompletePopUp}
					options={documentOptions}
					on:selection={onPopupDemoSelect}
				/>
			</div>
		</div>

		<div class="flex gap-4">
			<button
				class="btn variant-filled-error {checkedItems.length < 1
					? 'pointer-events-none opacity-50'
					: ''}"
				on:click={() => {
					deleteHandler(supabase, checkedItems)
				}}>Delete</button
			>
			<button
				class="btn variant-filled-primary"
				on:click={async () => {
					$draft = JSON.stringify('')
					await goto('/auth/admin/documents/create-document')
				}}
			>
				Create Document
			</button>
		</div>
	</section>

	<AdminTable {sourceData} {page} {checkAll} {singleCheck} />
</section>

<style>
	.adminPageContent {
		height: calc((100vh - 5rem) - 3.5rem);
	}
</style>
