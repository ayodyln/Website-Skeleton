<script lang="ts">
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	const logoutHandler = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.log(error)
			return
		}
		goto('/auth')
	}

	onMount(async () => {
		console.log('Admin Page Mounted')

		const { data, error } = await supabase.auth.getSession()
		console.log(data)
	})
</script>

<p>Admin</p>

<button class="btn variant-filled-error" on:click={logoutHandler}>Logout</button>
