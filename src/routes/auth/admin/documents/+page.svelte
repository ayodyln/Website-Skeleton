<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
	import type { TableSource } from '@skeletonlabs/skeleton'
	import { library } from '$lib/Blog/library'
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

	const addDocuments = () => {
		library.forEach(async (doc) => {
			const { error } = await supabase.from('documents').insert([
				{
					title: doc.title,
					url: doc.path,
					html: JSON.stringify(doc.html),
					read_time: doc.read_time,
					hero_image: doc.hero_image,
					feature_image: doc.feature_image,
					image: doc.image,
					blurb: doc.blurb,
					summary: doc.summary
				}
			])
			console.log(error)
		})
	}

	const fetchData = async () => {
		const { data, error } = await supabase.from('documents').select('*')
		sourceData = data
	}

	onMount(async () => {
		await fetchData()
		console.log(sourceData)
	})
</script>

<section class="p-4 space-y-4">
	<h2 class="h2">Documents</h2>
	<!-- Responsive Container (recommended) -->
	<Table source={tableSimple} />
</section>
