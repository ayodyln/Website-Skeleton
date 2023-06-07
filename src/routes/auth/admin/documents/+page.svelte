<script lang="ts">
	import { goto } from '$app/navigation'
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'
	import { format } from 'date-fns'
	import { library } from '$lib/Blog/library'

	export let data
	let { supabase } = data
	$: ({ supabase } = data)

	let sourceData: any = []

	$: tableSimple = {
		head: ['ID', 'Title', 'tech', 'tags', 'Publish Date'],
		body: tableMapperValues(sourceData, ['id', 'title', 'tech', 'tags', 'inserted_at']),
		meta: tableMapperValues(sourceData, [
			'id',
			'title',
			'inserted_at',
			'updated_at',
			'html',
			'read_time',
			'hero_image',
			'feature_image',
			'image',
			'summary',
			'tags',
			'tech',
			'url'
		]),
		foot: ['Total', '', `<code class="code">${sourceData.length}</code>`]
	}

	// $: console.log(sourceData)

	const fetchData = async () => {
		const { data, error } = await supabase.from('documents').select('*')

		if (error) {
			console.error(error)
			return
		}

		sourceData = data?.map((doc) => {
			return {
				...doc,
				inserted_at: format(new Date(doc.inserted_at), 'dd/MM/yyyy')
			}
		})
	}

	const pathStrHandler = (str: string) => str.split('/').filter((s) => s !== '' && s !== 'blog')

	const loadDB = async () => {
		library.forEach(async (doc) => {
			console.log(doc)
			const { error } = await supabase.from('documents').insert({
				title: doc.title,
				html: JSON.stringify(doc.html),
				summary: doc.summary,
				tags: JSON.stringify(doc.tags),
				tech: JSON.stringify(doc.tech),
				url: doc.path,
				read_time: doc.read_time,
				hero_image: doc.hero_image,
				feature_image: doc.feature_image,
				image: doc.image
			})
		})
	}

	onMount(async () => {
		console.log(library)
		await fetchData()

		const documents = supabase
			.channel('custom-all-channel')
			.on('postgres_changes', { event: '*', schema: 'public', table: 'documents' }, (payload) => {
				console.log('Change received!', payload)
			})
			.subscribe()
		console.log(documents)
	})
</script>

<section class="p-4 space-y-4">
	<h2 class="h2">Documents</h2>
	<button on:click={loadDB}>Load</button>
	<!-- Responsive Container (recommended) -->
	<Table
		source={tableSimple}
		interactive={true}
		on:selected={async (event) => {
			console.log(event.detail)
			const [path] = pathStrHandler(event.detail[event.detail.length - 1])
			await goto(`/auth/admin/documents/${path}`)
		}}
	/>
</section>
