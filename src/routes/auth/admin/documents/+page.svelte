<script lang="ts">
	import { onMount } from 'svelte'
	import { format } from 'date-fns'
	import AdminTable from '../../../../components/pages/admin/AdminTable.svelte'
	import { Autocomplete, popup } from '@skeletonlabs/skeleton'
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton'
	import type { Article } from '$lib/types'

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
	let checkedItems: unknown[]

	const fetchData = async () => {
		const { data, error } = await supabase.from('documents').select('*')
		if (error) return
		return data?.map((doc) => {
			return {
				...doc,
				inserted_at: format(new Date(doc.inserted_at), 'dd/MM/yyyy')
			}
		})
	}

	let flavorOptions: AutocompleteOption[]

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	}
	let inputPopupDemo: string = ''
	function onPopupDemoSelect(event: any): void {
		inputPopupDemo = event.detail.label
	}

	onMount(async () => {
		sourceData = await fetchData()

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

		flavorOptions = sourceData.map((doc: Article) => {
			return {
				label: doc.title,
				value: doc.id
			}
		})

		return () => documents.unsubscribe()
	})
</script>

<section class="p-4 pt-0 h-full flex flex-col space-y-4">
	<h2 class="h2">Documents</h2>

	<section class="card p-2 flex justify-between items-center">
		<div class="max-w-lg w-full">
			<input
				class="input autocomplete"
				type="search"
				name="autocomplete-search"
				bind:value={inputPopupDemo}
				placeholder="Search..."
				use:popup={popupSettings}
			/>
			<div data-popup="popupAutocomplete" class="card max-w-lg w-full shadow-xl p-1">
				<Autocomplete
					bind:input={inputPopupDemo}
					options={flavorOptions}
					on:selection={onPopupDemoSelect}
				/>
			</div>
		</div>

		<div class="flex gap-4">
			<button class="btn">Delete</button>
			<button class="btn variant-filled-primary"> New Document </button>
		</div>
	</section>

	<AdminTable {sourceData} {page} {checkedItems} />
</section>
