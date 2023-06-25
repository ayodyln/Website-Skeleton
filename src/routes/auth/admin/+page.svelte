<script lang="ts">
	import { onMount } from 'svelte'
	import { fetchDataTable, insertData } from '$lib/supabase/functions'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(async () => {})
</script>

<section class="p-4">
	<p>Admin</p>
</section>
