<script lang="ts">
	import { goto } from '$app/navigation'
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'

	export let data
	let { supabase } = data
	$: ({ supabase } = data)

	let sourceData: any = []

	$: tableSimple = {
		// A list of heading labels.
		head: ['ID', 'Title', 'url'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['id', 'title', 'url']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['id', 'title', 'url']),
		// Optional: A list of footer labels.
		foot: ['Total', '', `<code class="code">${sourceData.length}</code>`]
	}

	const fetchData = async () => {
		const { data, error } = await supabase.from('documents').select('*')
		sourceData = data
	}

	const pathStrHandler = (str: string) => str.split('/').filter((s) => s !== '' && s !== 'blog')

	onMount(async () => {
		await fetchData()
		console.log(sourceData)
	})
</script>

<section class="p-4 space-y-4">
	<h2 class="h2">Documents</h2>
	<!-- Responsive Container (recommended) -->
	<Table
		source={tableSimple}
		interactive={true}
		on:selected={async (event) => {
			const [path] = pathStrHandler(event.detail[2])
			await goto(`/auth/admin/documents/${path}`)
		}}
	/>
</section>
